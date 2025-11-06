package com.verdantwebworks.notesapp.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.verdantwebworks.notesapp.databinding.FragmentChecklistsBinding
import com.verdantwebworks.notesapp.viewmodel.ChecklistViewModel

class ChecklistsFragment : Fragment() {
    private var _binding: FragmentChecklistsBinding? = null
    private val binding get() = _binding!!
    private lateinit var checklistViewModel: ChecklistViewModel
    private lateinit var adapter: ChecklistsAdapter

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentChecklistsBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        checklistViewModel = ViewModelProvider(requireActivity())[ChecklistViewModel::class.java]

        adapter = ChecklistsAdapter(
            onChecklistClick = { checklist ->
                val fragment = ChecklistDetailFragment.newInstance(checklist.id)
                parentFragmentManager.beginTransaction()
                    .replace(android.R.id.content, fragment)
                    .addToBackStack(null)
                    .commit()
            },
            onDeleteClick = { checklist ->
                checklistViewModel.deleteChecklist(checklist)
            }
        )

        binding.recyclerView.adapter = adapter
        binding.recyclerView.layoutManager = LinearLayoutManager(context)

        checklistViewModel.allChecklists.observe(viewLifecycleOwner) { checklists ->
            adapter.submitList(checklists)
            binding.emptyView.visibility = if (checklists.isEmpty()) View.VISIBLE else View.GONE
        }

        binding.fabAddChecklist.setOnClickListener {
            val fragment = ChecklistDetailFragment.newInstance(null)
            parentFragmentManager.beginTransaction()
                .replace(android.R.id.content, fragment)
                .addToBackStack(null)
                .commit()
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
