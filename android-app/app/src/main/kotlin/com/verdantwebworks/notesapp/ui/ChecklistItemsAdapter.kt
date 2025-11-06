package com.verdantwebworks.notesapp.ui

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.verdantwebworks.notesapp.data.ChecklistItem
import com.verdantwebworks.notesapp.databinding.ItemChecklistItemBinding

class ChecklistItemsAdapter(
    private val onCheckedChanged: (ChecklistItem, Boolean) -> Unit,
    private val onDeleteClick: (ChecklistItem) -> Unit
) : ListAdapter<ChecklistItem, ChecklistItemsAdapter.ChecklistItemViewHolder>(ChecklistItemDiffCallback()) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ChecklistItemViewHolder {
        val binding = ItemChecklistItemBinding.inflate(
            LayoutInflater.from(parent.context),
            parent,
            false
        )
        return ChecklistItemViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ChecklistItemViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    inner class ChecklistItemViewHolder(private val binding: ItemChecklistItemBinding) :
        RecyclerView.ViewHolder(binding.root) {

        fun bind(item: ChecklistItem) {
            binding.checkBox.text = item.text
            binding.checkBox.isChecked = item.isChecked

            binding.checkBox.setOnCheckedChangeListener { _, isChecked ->
                onCheckedChanged(item, isChecked)
            }

            binding.buttonDelete.setOnClickListener {
                onDeleteClick(item)
            }
        }
    }

    class ChecklistItemDiffCallback : DiffUtil.ItemCallback<ChecklistItem>() {
        override fun areItemsTheSame(oldItem: ChecklistItem, newItem: ChecklistItem): Boolean {
            return oldItem.id == newItem.id
        }

        override fun areContentsTheSame(oldItem: ChecklistItem, newItem: ChecklistItem): Boolean {
            return oldItem == newItem
        }
    }
}
