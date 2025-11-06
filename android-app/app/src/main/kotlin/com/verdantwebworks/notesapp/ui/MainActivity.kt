package com.verdantwebworks.notesapp.ui

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import com.google.android.material.tabs.TabLayout
import com.verdantwebworks.notesapp.R
import com.verdantwebworks.notesapp.databinding.ActivityMainBinding
import com.verdantwebworks.notesapp.viewmodel.ChecklistViewModel
import com.verdantwebworks.notesapp.viewmodel.NoteViewModel

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var noteViewModel: NoteViewModel
    private lateinit var checklistViewModel: ChecklistViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        noteViewModel = ViewModelProvider(this)[NoteViewModel::class.java]
        checklistViewModel = ViewModelProvider(this)[ChecklistViewModel::class.java]

        setupTabs()
        
        if (savedInstanceState == null) {
            showNotesFragment()
        }
    }

    private fun setupTabs() {
        binding.tabLayout.addTab(binding.tabLayout.newTab().setText("Notes"))
        binding.tabLayout.addTab(binding.tabLayout.newTab().setText("Checklists"))

        binding.tabLayout.addOnTabSelectedListener(object : TabLayout.OnTabSelectedListener {
            override fun onTabSelected(tab: TabLayout.Tab?) {
                when (tab?.position) {
                    0 -> showNotesFragment()
                    1 -> showChecklistsFragment()
                }
            }

            override fun onTabUnselected(tab: TabLayout.Tab?) {}
            override fun onTabReselected(tab: TabLayout.Tab?) {}
        })
    }

    private fun showNotesFragment() {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragmentContainer, NotesFragment())
            .commit()
    }

    private fun showChecklistsFragment() {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragmentContainer, ChecklistsFragment())
            .commit()
    }
}
