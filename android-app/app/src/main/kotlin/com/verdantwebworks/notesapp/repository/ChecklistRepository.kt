package com.verdantwebworks.notesapp.repository

import com.verdantwebworks.notesapp.data.Checklist
import com.verdantwebworks.notesapp.data.ChecklistItem
import com.verdantwebworks.notesapp.data.ChecklistWithItems
import com.verdantwebworks.notesapp.database.ChecklistDao
import com.verdantwebworks.notesapp.database.ChecklistItemDao
import kotlinx.coroutines.flow.Flow

class ChecklistRepository(
    private val checklistDao: ChecklistDao,
    private val checklistItemDao: ChecklistItemDao
) {
    val allChecklists: Flow<List<Checklist>> = checklistDao.getAllChecklists()

    fun getChecklistWithItems(checklistId: Long): Flow<ChecklistWithItems?> {
        return checklistItemDao.getChecklistWithItems(checklistId)
    }

    fun getItemsForChecklist(checklistId: Long): Flow<List<ChecklistItem>> {
        return checklistItemDao.getItemsForChecklist(checklistId)
    }

    suspend fun getChecklistById(id: Long): Checklist? {
        return checklistDao.getChecklistById(id)
    }

    suspend fun insertChecklist(checklist: Checklist): Long {
        return checklistDao.insert(checklist)
    }

    suspend fun updateChecklist(checklist: Checklist) {
        checklistDao.update(checklist)
    }

    suspend fun deleteChecklist(checklist: Checklist) {
        checklistDao.delete(checklist)
    }

    suspend fun deleteChecklistById(id: Long) {
        checklistDao.deleteById(id)
    }

    suspend fun insertItem(item: ChecklistItem): Long {
        return checklistItemDao.insert(item)
    }

    suspend fun updateItem(item: ChecklistItem) {
        checklistItemDao.update(item)
    }

    suspend fun deleteItem(item: ChecklistItem) {
        checklistItemDao.delete(item)
    }

    suspend fun deleteItemById(id: Long) {
        checklistItemDao.deleteById(id)
    }
}
