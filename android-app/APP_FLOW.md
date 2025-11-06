# Android Notes & Checklists App - App Flow and Screens

## App Navigation Flow

```
┌─────────────────────────────────────────────────────────┐
│                    MainActivity                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │         Toolbar: "Notes App"                       │ │
│  └────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────┐ │
│  │     [Notes Tab]  │  [Checklists Tab]               │ │
│  └────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────┐ │
│  │                                                      │ │
│  │         Fragment Container                          │ │
│  │         (NotesFragment or ChecklistsFragment)       │ │
│  │                                                      │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## Screen 1: Notes List (NotesFragment)

```
┌─────────────────────────────────────────────────────────┐
│  Notes Tab  │  Checklists Tab                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Meeting Notes                        [Delete]  │    │
│  │  Discuss project timeline and...                │    │
│  │  Nov 6, 2025 14:30                              │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Shopping List Ideas                  [Delete]  │    │
│  │  Remember to get groceries for...               │    │
│  │  Nov 5, 2025 10:15                              │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Code Review Notes                    [Delete]  │    │
│  │  Important feedback from team...                │    │
│  │  Nov 4, 2025 16:45                              │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
│                                                  [+]      │
└─────────────────────────────────────────────────────────┘

Tap any note to edit it
Tap [+] button to create a new note
Tap [Delete] to remove a note
```

## Screen 2: Note Detail/Edit (NoteDetailFragment)

```
┌─────────────────────────────────────────────────────────┐
│  Create/Edit Note                                        │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Title                                                    │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Meeting Notes                                      │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  Content                                                  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Discuss project timeline and deliverables         │  │
│  │ - Q1 goals                                         │  │
│  │ - Resource allocation                              │  │
│  │ - Budget review                                    │  │
│  │                                                     │  │
│  │                                                     │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │      Cancel         │  │         Save            │  │
│  └─────────────────────┘  └─────────────────────────┘  │
│                                                           │
└─────────────────────────────────────────────────────────┘

Enter title and content
Tap Save to save the note
Tap Cancel to discard changes
```

## Screen 3: Checklists List (ChecklistsFragment)

```
┌─────────────────────────────────────────────────────────┐
│  Notes Tab  │  Checklists Tab                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Grocery Shopping                     [Delete]  │    │
│  │  Nov 6, 2025 14:30                              │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Project Tasks                        [Delete]  │    │
│  │  Nov 5, 2025 09:00                              │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Weekend Plans                        [Delete]  │    │
│  │  Nov 3, 2025 18:20                              │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
│                                                  [+]      │
└─────────────────────────────────────────────────────────┘

Tap any checklist to view/edit it
Tap [+] button to create a new checklist
Tap [Delete] to remove a checklist
```

## Screen 4: Checklist Detail/Edit (ChecklistDetailFragment)

```
┌─────────────────────────────────────────────────────────┐
│  Create/Edit Checklist                                   │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Title                                                    │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Grocery Shopping                                   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  Add item                          ┌────────────────┐    │
│  ┌────────────────────────────────┐│      Add       │    │
│  │ Enter item text...              ││                │    │
│  └────────────────────────────────┘└────────────────┘    │
│                                                           │
│  Items:                                                   │
│  ┌───────────────────────────────────────────────────┐  │
│  │ ☑ Milk                                  [Delete]  │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ ☑ Bread                                 [Delete]  │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ ☐ Eggs                                  [Delete]  │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ ☐ Coffee                                [Delete]  │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │      Cancel         │  │         Save            │  │
│  └─────────────────────┘  └─────────────────────────┘  │
│                                                           │
└─────────────────────────────────────────────────────────┘

Enter checklist title
Add items by typing and tapping Add
Check/uncheck items by tapping the checkbox
Delete items with [Delete] button
Tap Save to save the checklist
Tap Cancel to discard changes
```

## User Workflows

### Workflow 1: Create a New Note

1. Open app → Notes tab is selected by default
2. Tap [+] floating action button
3. Enter note title
4. Enter note content
5. Tap Save
6. Note appears in the list

### Workflow 2: Edit an Existing Note

1. Open app → Notes tab
2. Tap on a note from the list
3. Modify title or content
4. Tap Save to save changes
5. Changes are reflected in the list

### Workflow 3: Delete a Note

1. Open app → Notes tab
2. Tap [Delete] button on the note card
3. Note is immediately removed from the list

### Workflow 4: Create a Checklist

1. Open app → Tap Checklists tab
2. Tap [+] floating action button
3. Enter checklist title
4. Type an item in "Add item" field
5. Tap Add button
6. Repeat steps 4-5 for more items
7. Tap Save
8. Checklist appears in the list

### Workflow 5: Manage Checklist Items

1. Open app → Checklists tab
2. Tap on a checklist
3. Tap checkbox to mark item as complete/incomplete
4. Add more items using the Add item field
5. Delete items with [Delete] button
6. Tap Save to save changes

### Workflow 6: Switch Between Notes and Checklists

1. Open app
2. Tap the tab at the top to switch views
   - Tap "Notes" to view notes
   - Tap "Checklists" to view checklists

## Data Flow

```
User Action
    ↓
Fragment (UI)
    ↓
ViewModel
    ↓
Repository
    ↓
DAO (Data Access Object)
    ↓
Room Database (SQLite)
    ↓
LiveData/Flow emission
    ↓
ViewModel observes changes
    ↓
Fragment updates UI
```

## Color Scheme

- **Primary Color**: Verdant Green (#6FA768)
- **Primary Dark**: Verdant Green Dark (#4A7C43)
- **Accent**: Teal (#FF03DAC5)
- **Background**: White
- **Text**: Default Android text colors

## Material Design Components Used

- MaterialCardView for list items
- TextInputLayout and TextInputEditText for forms
- FloatingActionButton for add actions
- TabLayout for navigation
- MaterialToolbar for app bar
- RecyclerView for lists
- CheckBox for checklist items
- ImageButton for delete actions

## Accessibility Features

- Content descriptions on all interactive elements
- Proper contrast ratios for text
- Touch targets meet minimum size requirements (48dp)
- Semantic structure with proper view hierarchy
