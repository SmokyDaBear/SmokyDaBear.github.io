package com.verdantwebworks.notesapp.data

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "checklists")
data class Checklist(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val title: String,
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis()
)
