// Todo app functionality
        let todos = [];
        let currentFilter = 'all';
        let todoIdCounter = 1;

        // Load todos from localStorage on page load
        window.addEventListener('load', function() {
            loadTodos();
            renderTodos();
            updateStats();
        });

        // Add todo function
        function addTodo() {
            const input = document.getElementById('todoInput');
            const text = input.value.trim();
            
            if (text === '') {
                alert('Please enter a todo item!');
                return;
            }

            const todo = {
                id: todoIdCounter++,
                text: text,
                completed: false,
                createdAt: new Date().toISOString()
            };

            todos.push(todo);
            input.value = '';
            saveTodos();
            renderTodos();
            updateStats();
        }

        // Toggle todo completion
        function toggleTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                saveTodos();
                renderTodos();
                updateStats();
            }
        }

        // Delete todo
        function deleteTodo(id) {
            const todoElement = document.querySelector(`[data-id="${id}"]`);
            todoElement.classList.add('removing');
            
            setTimeout(() => {
                todos = todos.filter(t => t.id !== id);
                saveTodos();
                renderTodos();
                updateStats();
            }, 300);
        }

        // Edit todo
        function editTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                const newText = prompt('Edit todo:', todo.text);
                if (newText !== null && newText.trim() !== '') {
                    todo.text = newText.trim();
                    saveTodos();
                    renderTodos();
                }
            }
        }

        // Filter todos
        function filterTodos(filter) {
            currentFilter = filter;
            
            // Update active filter button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            renderTodos();
        }

        // Render todos
        function renderTodos() {
            const todoList = document.getElementById('todoList');
            const emptyState = document.getElementById('emptyState');
            
            let filteredTodos = todos;
            
            if (currentFilter === 'active') {
                filteredTodos = todos.filter(t => !t.completed);
            } else if (currentFilter === 'completed') {
                filteredTodos = todos.filter(t => t.completed);
            }

            if (filteredTodos.length === 0) {
                emptyState.style.display = 'block';
                // Hide all todo items
                document.querySelectorAll('.todo-item').forEach(item => {
                    item.style.display = 'none';
                });
                return;
            }

            emptyState.style.display = 'none';

            // Clear existing todos
            document.querySelectorAll('.todo-item').forEach(item => {
                item.remove();
            });

            // Render filtered todos
            filteredTodos.forEach(todo => {
                const todoElement = document.createElement('div');
                todoElement.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                todoElement.setAttribute('data-id', todo.id);
                
                todoElement.innerHTML = `
                    <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" onclick="toggleTodo(${todo.id})"></div>
                    <span class="todo-text">${todo.text}</span>
                    <div class="todo-actions">
                        <button class="action-btn edit-btn" onclick="editTodo(${todo.id})" title="Edit">✏️</button>
                        <button class="action-btn delete-btn" onclick="deleteTodo(${todo.id})" title="Delete">🗑️</button>
                    </div>
                `;
                
                todoList.appendChild(todoElement);
            });
        }

        // Update stats
        function updateStats() {
            const total = todos.length;
            const completed = todos.filter(t => t.completed).length;
            const active = total - completed;

            document.getElementById('totalTodos').textContent = total;
            document.getElementById('activeTodos').textContent = active;
            document.getElementById('completedTodos').textContent = completed;
        }

        // Save todos to localStorage
        function saveTodos() {
            localStorage.setItem('todos', JSON.stringify(todos));
            localStorage.setItem('todoIdCounter', todoIdCounter.toString());
        }

        // Load todos from localStorage
        function loadTodos() {
            const savedTodos = localStorage.getItem('todos');
            const savedCounter = localStorage.getItem('todoIdCounter');
            
            if (savedTodos) {
                todos = JSON.parse(savedTodos);
            }
            
            if (savedCounter) {
                todoIdCounter = parseInt(savedCounter);
            }
        }

        // Dark mode toggle
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        }

        // Load saved theme
        window.addEventListener('load', function() {
            const savedTheme = localStorage.getItem('theme');
            const themeIcon = document.getElementById('theme-icon');
            
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                themeIcon.textContent = '☀️';
            }
        });

        // Add todo on Enter key press
        document.getElementById('todoInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
   