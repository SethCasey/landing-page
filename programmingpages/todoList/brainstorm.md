
- Factory Functions / Class to generate "todo's"
- Properties for todo's?
    - Name
    - Description
    - Due?
        - https://github.com/date-fns/date-fns
        - Can use npm to install the above library, useful for formatting dates and
            useful date and time related functions
    - Priority?
- All to do's as checklist as a whole, OR ToDos can contain checklist?! 
- Folders for ToDos 
    - Default folder when loaded
    - User-defined additional folders
- UI must include, as the minimum:
    - view all projects
    - view toDos in folder-specific view
    - expand toDo to see specifics and details
    - delete a todo
- Saving todos (Start with localstorage)
    - https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    - Make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there!
    - localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck!

#### Inspiration examples
- https://en.todoist.com/
- https://culturedcode.com/things/
- https://www.any.do/
