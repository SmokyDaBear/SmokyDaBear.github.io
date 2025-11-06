package com.verdantwebworks.notesapp.database

import androidx.room.*
import com.verdantwebworks.notesapp.data.Checklist
import kotlinx.coroutines.flow.Flow

@Dao
interface ChecklistDao {
    @Query("SELECT * FROM checklists ORDER BY updatedAt DESC")
    fun getAllChecklists(): Flow<List<Checklist>>

    @Query("SELECT * FROM checklists WHERE id = :checklistId")
    suspend fun getChecklistById(checklistId: Long): Checklist?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(checklist: Checklist): Long

    @Update
    suspend fun update(checklist: Checklist)

    @Delete
    suspend fun delete(checklist: Checklist)

    @Query("DELETE FROM checklists WHERE id = :checklistId")
    suspend fun deleteById(checklistId: Long)
}
