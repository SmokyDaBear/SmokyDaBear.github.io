package com.verdantwebworks.notesapp.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.asLiveData
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.verdantwebworks.notesapp.data.Checklist
import com.verdantwebworks.notesapp.data.ChecklistItem
import com.verdantwebworks.notesapp.databinding.FragmentChecklistDetailBinding
import com.verdantwebworks.notesapp.viewmodel.ChecklistViewModel
import kotlinx.coroutines.launch

class ChecklistDetailFragment : Fragment() {
    private var _binding: FragmentChecklistDetailBinding? = null
    private val binding get() = _binding!!
    private lateinit var checklistViewModel: ChecklistViewModel
    private var checklistId: Long? = null
    private var currentChecklist: Checklist? = null
    private lateinit var adapter: ChecklistItemsAdapter

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentChecklistDetailBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        checklistViewModel = ViewModelProvider(requireActivity())[ChecklistViewModel::class.java]
        checklistId = arguments?.getLong(ARG_CHECKLIST_ID)

        setupRecyclerView()
        loadChecklist()

        binding.buttonSave.setOnClickListener {
            saveChecklist()
        }

        binding.buttonCancel.setOnClickListener {
            parentFragmentManager.popBackStack()
        }

        binding.buttonAddItem.setOnClickListener {
            addNewItem()
        }
    }

    private fun setupRecyclerView() {
        adapter = ChecklistItemsAdapter(
            onCheckedChanged = { item, isChecked ->
                checklistViewModel.updateItem(item.copy(isChecked = isChecked))
            },
            onDeleteClick = { item ->
                checklistViewModel.deleteItem(item)
            }
        )

        binding.recyclerViewItems.adapter = adapter
        binding.recyclerViewItems.layoutManager = LinearLayoutManager(context)
    }

    private fun loadChecklist() {
        checklistId?.let { id ->
            lifecycleScope.launch {
                currentChecklist = checklistViewModel.getChecklistById(id)
                currentChecklist?.let { checklist ->
                    binding.editTitle.setText(checklist.title)
                }
            }

            checklistViewModel.getItemsForChecklist(id).asLiveData().observe(viewLifecycleOwner) { items ->
                adapter.submitList(items)
            }
        }
    }

    private fun saveChecklist() {
        val title = binding.editTitle.text.toString().trim()

        if (title.isEmpty()) {
            binding.editTitle.error = "Title is required"
            return
        }

        lifecycleScope.launch {
            val checklist = if (currentChecklist != null) {
                currentChecklist!!.copy(
                    title = title,
                    updatedAt = System.currentTimeMillis()
                )
            } else {
                Checklist(title = title)
            }

            if (currentChecklist != null) {
                checklistViewModel.updateChecklist(checklist)
            } else {
                val newId = checklistViewModel.insertChecklist(checklist)
                checklistId = newId
                currentChecklist = checklist.copy(id = newId)
            }

            parentFragmentManager.popBackStack()
        }
    }

    private fun addNewItem() {
        val itemText = binding.editNewItem.text.toString().trim()
        if (itemText.isEmpty()) {
            binding.editNewItem.error = "Item text is required"
            return
        }

        val currentId = checklistId
        if (currentId == null) {
            // Save checklist first
            val title = binding.editTitle.text.toString().trim()
            if (title.isEmpty()) {
                binding.editTitle.error = "Save checklist first"
                return
            }

            lifecycleScope.launch {
                val checklist = Checklist(title = title)
                val newId = checklistViewModel.insertChecklist(checklist)
                checklistId = newId
                currentChecklist = checklist.copy(id = newId)

                val item = ChecklistItem(
                    checklistId = newId,
                    text = itemText
                )
                lifecycleScope.launch {
                    checklistViewModel.insertItem(item)
                }
                binding.editNewItem.text?.clear()
            }
        } else {
            val item = ChecklistItem(
                checklistId = currentId,
                text = itemText
            )
            lifecycleScope.launch {
                checklistViewModel.insertItem(item)
            }
            binding.editNewItem.text?.clear()
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

    companion object {
        private const val ARG_CHECKLIST_ID = "checklist_id"

        fun newInstance(checklistId: Long?): ChecklistDetailFragment {
            val fragment = ChecklistDetailFragment()
            val args = Bundle()
            checklistId?.let { args.putLong(ARG_CHECKLIST_ID, it) }
            fragment.arguments = args
            return fragment
        }
    }
}
