package com.verdantwebworks.notesapp.database

import androidx.room.*
import com.verdantwebworks.notesapp.data.ChecklistItem
import com.verdantwebworks.notesapp.data.ChecklistWithItems
import kotlinx.coroutines.flow.Flow

@Dao
interface ChecklistItemDao {
    @Transaction
    @Query("SELECT * FROM checklists WHERE id = :checklistId")
    fun getChecklistWithItems(checklistId: Long): Flow<ChecklistWithItems?>

    @Query("SELECT * FROM checklist_items WHERE checklistId = :checklistId ORDER BY position")
    fun getItemsForChecklist(checklistId: Long): Flow<List<ChecklistItem>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(item: ChecklistItem): Long

    @Update
    suspend fun update(item: ChecklistItem)

    @Delete
    suspend fun delete(item: ChecklistItem)

    @Query("DELETE FROM checklist_items WHERE id = :itemId")
    suspend fun deleteById(itemId: Long)

    @Query("DELETE FROM checklist_items WHERE checklistId = :checklistId")
    suspend fun deleteAllForChecklist(checklistId: Long)
}
