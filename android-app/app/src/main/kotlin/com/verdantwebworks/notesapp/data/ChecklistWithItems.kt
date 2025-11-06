package com.verdantwebworks.notesapp.data

import androidx.room.Embedded
import androidx.room.Relation

data class ChecklistWithItems(
    @Embedded val checklist: Checklist,
    @Relation(
        parentColumn = "id",
        entityColumn = "checklistId"
    )
    val items: List<ChecklistItem>
)
