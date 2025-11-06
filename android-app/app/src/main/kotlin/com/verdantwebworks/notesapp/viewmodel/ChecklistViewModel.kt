package com.verdantwebworks.notesapp.viewmodel

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.asLiveData
import androidx.lifecycle.viewModelScope
import com.verdantwebworks.notesapp.data.Checklist
import com.verdantwebworks.notesapp.data.ChecklistItem
import com.verdantwebworks.notesapp.data.ChecklistWithItems
import com.verdantwebworks.notesapp.database.AppDatabase
import com.verdantwebworks.notesapp.repository.ChecklistRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.launch

class ChecklistViewModel(application: Application) : AndroidViewModel(application) {
    private val repository: ChecklistRepository
    val allChecklists: LiveData<List<Checklist>>

    init {
        val database = AppDatabase.getDatabase(application)
        repository = ChecklistRepository(database.checklistDao(), database.checklistItemDao())
        allChecklists = repository.allChecklists.asLiveData()
    }

    fun getChecklistWithItems(checklistId: Long): Flow<ChecklistWithItems?> {
        return repository.getChecklistWithItems(checklistId)
    }

    fun getItemsForChecklist(checklistId: Long): Flow<List<ChecklistItem>> {
        return repository.getItemsForChecklist(checklistId)
    }

    suspend fun insertChecklist(checklist: Checklist): Long {
        return repository.insertChecklist(checklist)
    }

    fun updateChecklist(checklist: Checklist) = viewModelScope.launch {
        repository.updateChecklist(checklist)
    }

    fun deleteChecklist(checklist: Checklist) = viewModelScope.launch {
        repository.deleteChecklist(checklist)
    }

    fun deleteChecklistById(id: Long) = viewModelScope.launch {
        repository.deleteChecklistById(id)
    }

    suspend fun insertItem(item: ChecklistItem): Long {
        return repository.insertItem(item)
    }

    fun updateItem(item: ChecklistItem) = viewModelScope.launch {
        repository.updateItem(item)
    }

    fun deleteItem(item: ChecklistItem) = viewModelScope.launch {
        repository.deleteItem(item)
    }

    fun deleteItemById(id: Long) = viewModelScope.launch {
        repository.deleteItemById(id)
    }

    suspend fun getChecklistById(id: Long): Checklist? {
        return repository.getChecklistById(id)
    }
}
