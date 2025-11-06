package com.verdantwebworks.notesapp.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.lifecycleScope
import com.verdantwebworks.notesapp.data.Note
import com.verdantwebworks.notesapp.databinding.FragmentNoteDetailBinding
import com.verdantwebworks.notesapp.viewmodel.NoteViewModel
import kotlinx.coroutines.launch

class NoteDetailFragment : Fragment() {
    private var _binding: FragmentNoteDetailBinding? = null
    private val binding get() = _binding!!
    private lateinit var noteViewModel: NoteViewModel
    private var noteId: Long? = null
    private var currentNote: Note? = null

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentNoteDetailBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        noteViewModel = ViewModelProvider(requireActivity())[NoteViewModel::class.java]
        noteId = arguments?.getLong(ARG_NOTE_ID)

        noteId?.let { id ->
            lifecycleScope.launch {
                currentNote = noteViewModel.getNoteById(id)
                currentNote?.let { note ->
                    binding.editTitle.setText(note.title)
                    binding.editContent.setText(note.content)
                }
            }
        }

        binding.buttonSave.setOnClickListener {
            saveNote()
        }

        binding.buttonCancel.setOnClickListener {
            parentFragmentManager.popBackStack()
        }
    }

    private fun saveNote() {
        val title = binding.editTitle.text.toString().trim()
        val content = binding.editContent.text.toString().trim()

        if (title.isEmpty()) {
            binding.editTitle.error = "Title is required"
            return
        }

        val note = if (currentNote != null) {
            currentNote!!.copy(
                title = title,
                content = content,
                updatedAt = System.currentTimeMillis()
            )
        } else {
            Note(
                title = title,
                content = content
            )
        }

        if (currentNote != null) {
            noteViewModel.update(note)
        } else {
            noteViewModel.insert(note)
        }

        parentFragmentManager.popBackStack()
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

    companion object {
        private const val ARG_NOTE_ID = "note_id"

        fun newInstance(noteId: Long?): NoteDetailFragment {
            val fragment = NoteDetailFragment()
            val args = Bundle()
            noteId?.let { args.putLong(ARG_NOTE_ID, it) }
            fragment.arguments = args
            return fragment
        }
    }
}
