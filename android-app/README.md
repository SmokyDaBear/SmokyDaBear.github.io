# Android Notes & Checklists App

A simple Android application built with Kotlin for storing notes and checklists.

## Features

- **Notes Management**
  - Create, read, update, and delete notes
  - Each note has a title and content
  - Automatic timestamp tracking

- **Checklists Management**
  - Create, read, update, and delete checklists
  - Add items to checklists
  - Check/uncheck items
  - Delete individual items

## Technical Details

- **Language**: Kotlin
- **Architecture**: MVVM (Model-View-ViewModel)
- **Database**: Room (SQLite)
- **UI**: Material Design 3 components
- **Minimum SDK**: 24 (Android 7.0)
- **Target SDK**: 34 (Android 14)

## Project Structure

```
app/src/main/kotlin/com/verdantwebworks/notesapp/
├── data/           # Data models (Note, Checklist, ChecklistItem)
├── database/       # Room database and DAOs
├── repository/     # Repository classes
├── viewmodel/      # ViewModels
└── ui/             # UI components (Activities, Fragments, Adapters)
```

## Building the App

1. Open the project in Android Studio
2. Sync Gradle files
3. Build and run on an emulator or device

## Dependencies

- AndroidX Core KTX
- Material Components
- Room Database
- Lifecycle Components
- Navigation Components
- Coroutines

## License

This project is part of the Verdant Webworks portfolio.
