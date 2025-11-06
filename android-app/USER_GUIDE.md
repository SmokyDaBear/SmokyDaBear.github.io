# Android Notes & Checklists App - User Guide

## Overview

This is a native Android application built with Kotlin that allows you to create and manage notes and checklists. The app uses modern Android development practices including MVVM architecture, Room database for persistent storage, and Material Design 3 UI components.

## Features

### Notes
- Create new notes with a title and content
- View all your notes in a scrollable list
- Edit existing notes
- Delete notes you no longer need
- Notes are automatically timestamped
- Notes are sorted by most recently updated

### Checklists
- Create new checklists with a title
- Add multiple items to each checklist
- Check/uncheck items as you complete tasks
- Edit checklist titles
- Delete individual items or entire checklists
- Checklists are automatically timestamped

## Getting Started

### Prerequisites
- Android Studio Hedgehog (2023.1.1) or later
- Android SDK 24 or higher (Android 7.0+)
- Java 17

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SmokyDaBear/SmokyDaBear.github.io.git
cd SmokyDaBear.github.io/android-app
```

2. Open the project in Android Studio:
   - Launch Android Studio
   - Select "Open an Existing Project"
   - Navigate to the `android-app` folder
   - Click "OK"

3. Wait for Gradle to sync and download dependencies

4. Run the app:
   - Connect an Android device or start an emulator
   - Click the "Run" button (green play icon) or press Shift+F10
   - Select your device/emulator
   - The app will install and launch automatically

## Using the App

### Creating a Note

1. Open the app
2. You'll see two tabs at the top: "Notes" and "Checklists"
3. Make sure the "Notes" tab is selected
4. Tap the floating action button (+ icon) at the bottom right
5. Enter a title and content for your note
6. Tap "Save" to save the note or "Cancel" to discard

### Editing a Note

1. In the Notes tab, tap on any note in the list
2. The note will open for editing
3. Modify the title or content as needed
4. Tap "Save" to save changes or "Cancel" to discard

### Deleting a Note

1. In the Notes tab, find the note you want to delete
2. Tap the delete icon (trash can) on the right side of the note
3. The note will be immediately deleted

### Creating a Checklist

1. Open the app
2. Tap the "Checklists" tab at the top
3. Tap the floating action button (+ icon) at the bottom right
4. Enter a title for your checklist
5. Add items by typing in the "Add item" field and tapping "Add"
6. Tap "Save" to save the checklist or "Cancel" to discard

### Managing Checklist Items

1. In the Checklists tab, tap on a checklist to open it
2. To check/uncheck an item, simply tap the checkbox
3. To add more items, type in the "Add item" field and tap "Add"
4. To delete an item, tap the delete icon next to it
5. Tap "Save" when done or "Cancel" to discard changes

### Deleting a Checklist

1. In the Checklists tab, find the checklist you want to delete
2. Tap the delete icon (trash can) on the right side
3. The checklist and all its items will be immediately deleted

## Technical Architecture

### MVVM Pattern
The app follows the Model-View-ViewModel (MVVM) architectural pattern:
- **Model**: Data classes (Note, Checklist, ChecklistItem) and Room database
- **View**: Activities, Fragments, and XML layouts
- **ViewModel**: NoteViewModel and ChecklistViewModel manage UI data

### Data Persistence
- Uses Room Database for local SQLite storage
- Data is automatically persisted across app restarts
- Supports foreign key relationships (checklist items link to checklists)

### Components

#### Data Layer
- `Note.kt`: Represents a note with title, content, and timestamps
- `Checklist.kt`: Represents a checklist with title and timestamps
- `ChecklistItem.kt`: Represents an item in a checklist with text and checked state
- `ChecklistWithItems.kt`: Wrapper class combining checklist with its items

#### Database Layer
- `AppDatabase.kt`: Main Room database class
- `NoteDao.kt`: Data access object for notes
- `ChecklistDao.kt`: Data access object for checklists
- `ChecklistItemDao.kt`: Data access object for checklist items

#### Repository Layer
- `NoteRepository.kt`: Handles note data operations
- `ChecklistRepository.kt`: Handles checklist data operations

#### ViewModel Layer
- `NoteViewModel.kt`: Manages note-related UI state and operations
- `ChecklistViewModel.kt`: Manages checklist-related UI state and operations

#### UI Layer
- `MainActivity.kt`: Main entry point with tab navigation
- `NotesFragment.kt`: Displays list of notes
- `NoteDetailFragment.kt`: Create/edit note interface
- `ChecklistsFragment.kt`: Displays list of checklists
- `ChecklistDetailFragment.kt`: Create/edit checklist interface
- Various adapters for RecyclerView lists

## Dependencies

The app uses the following key dependencies:
- **AndroidX Core**: Core Android functionality
- **Material Components**: Material Design UI components
- **Room Database**: SQLite database with compile-time verification
- **Lifecycle Components**: ViewModel and LiveData
- **Navigation Components**: Fragment navigation
- **Kotlin Coroutines**: Asynchronous operations

## Troubleshooting

### App won't build
- Make sure you have the correct Android SDK installed (SDK 34)
- Try "File > Invalidate Caches / Restart" in Android Studio
- Run `./gradlew clean build` from the android-app directory

### Database errors
- The app will automatically create the database on first run
- If you encounter issues, try uninstalling and reinstalling the app

### UI issues
- Make sure your device/emulator is running Android 7.0 (API 24) or higher
- Try rotating the device to refresh the UI

## Future Enhancements

Potential features for future versions:
- Note categories/tags
- Search functionality
- Note sharing
- Cloud backup/sync
- Rich text formatting
- Attachments (images, files)
- Reminders and notifications
- Dark mode

## Contributing

This is a personal project, but suggestions and feedback are welcome!

## License

Part of the Verdant Webworks portfolio project.
