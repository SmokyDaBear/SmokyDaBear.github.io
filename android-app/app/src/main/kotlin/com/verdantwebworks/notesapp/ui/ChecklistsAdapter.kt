package com.verdantwebworks.notesapp.ui

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.verdantwebworks.notesapp.data.Checklist
import com.verdantwebworks.notesapp.databinding.ItemChecklistBinding
import java.text.SimpleDateFormat
import java.util.*

class ChecklistsAdapter(
    private val onChecklistClick: (Checklist) -> Unit,
    private val onDeleteClick: (Checklist) -> Unit
) : ListAdapter<Checklist, ChecklistsAdapter.ChecklistViewHolder>(ChecklistDiffCallback()) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ChecklistViewHolder {
        val binding = ItemChecklistBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ChecklistViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ChecklistViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    inner class ChecklistViewHolder(private val binding: ItemChecklistBinding) :
        RecyclerView.ViewHolder(binding.root) {

        fun bind(checklist: Checklist) {
            binding.textTitle.text = checklist.title
            binding.textDate.text = formatDate(checklist.updatedAt)

            binding.root.setOnClickListener {
                onChecklistClick(checklist)
            }

            binding.buttonDelete.setOnClickListener {
                onDeleteClick(checklist)
            }
        }

        private fun formatDate(timestamp: Long): String {
            val sdf = SimpleDateFormat("MMM dd, yyyy HH:mm", Locale.getDefault())
            return sdf.format(Date(timestamp))
        }
    }

    class ChecklistDiffCallback : DiffUtil.ItemCallback<Checklist>() {
        override fun areItemsTheSame(oldItem: Checklist, newItem: Checklist): Boolean {
            return oldItem.id == newItem.id
        }

        override fun areContentsTheSame(oldItem: Checklist, newItem: Checklist): Boolean {
            return oldItem == newItem
        }
    }
}
