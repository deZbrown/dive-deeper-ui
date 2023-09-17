import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import EditAndDelete from '@/components/AppButton'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'

const ToDo = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [editingTaskId, setEditingTaskId] = useState(null)
    const [editedValue, setEditedValue] = useState('')

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('api/v1/tasks', {
                    withCredentials: true,
                })
                setTasks(response.data)
            } catch (error) {
                console.error('Error fetching tasks:', error)
            }
        }

        fetchTasks()
    }, [])

    const addTask = async () => {
        try {
            const response = await axios.post(
                'api/v1/tasks',
                {
                    title: 'test',
                    description: 'test',
                },
                {
                    withCredentials: true,
                },
            )

            if ([200, 201].includes(response.status)) {
                setTasks([...tasks, response.data])
                setTask('')
            }
        } catch (error) {
            if (error.response && error.response.status !== 403) {
                console.error('Error adding task:', error)
            }
        }
    }

    const startEditing = (taskId, taskTitle) => {
        setEditingTaskId(taskId)
        setEditedValue(taskTitle)
    }

    const updateTask = async taskId => {
        try {
            const response = await axios.put(
                `api/v1/tasks/${taskId}`,
                { title: editedValue },
                { withCredentials: true },
            )

            if (response.status === 200) {
                // Update the task list locally without fetching again
                const updatedTasks = tasks.map(task =>
                    task.id === taskId ? { ...task, title: editedValue } : task,
                )
                setTasks(updatedTasks)

                // Reset editing state
                setEditingTaskId(null)
                setEditedValue('')
            }
        } catch (error) {
            console.error('Error updating task:', error)
        }
    }

    const deleteTask = async taskId => {
        try {
            const response = await axios.delete(`api/v1/tasks/${taskId}`, {
                withCredentials: true,
            })

            if (response.status === 204) {
                // Filter out the task with the given ID from the tasks list
                const updatedTasks = tasks.filter(task => task.id !== taskId)
                setTasks(updatedTasks)
            }
        } catch (error) {
            console.error('Error deleting task:', error)
        }
    }

    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mt-1">
            <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 leading-tight mb-4">
                    To-Do List
                </h3>
                <div>
                    <Input
                        type="text"
                        placeholder="New task..."
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        className="
                            border
                            rounded
                            w-full
                            py-2
                            px-
                            text-gray-700
                            dark:text-gray-300
                            leading-tight
                            focus:outline-none
                            focus:shadow-outline
                            dark:bg-gray-700
                            dark:border-gray-600
                        "
                    />
                    <Button
                        onClick={addTask}
                        variant="primary"
                        className="
                            bg-black 
                            text-white
                            hover:bg-gray-100
                            hover:text-black
                            dark:bg-white
                            dark:text-black
                            dark:hover:bg-gray-800
                            dark:hover:text-white
                            rounded
                            py-1
                            px-3
                            mt-2
                        ">
                        Add Task
                    </Button>
                </div>
                <ul className="mt-6">
                    {tasks.map(task => (
                        <li
                            key={task.id}
                            className="
                                py-6
                                flex
                                items-center
                                justify-between
                            ">
                            <span
                                className="
                                text-gray-800
                                dark:text-gray-200
                                pl-4
                            ">
                                {editingTaskId === task.id ? (
                                    <Input
                                        value={editedValue}
                                        onChange={e =>
                                            setEditedValue(e.target.value)
                                        }
                                        editing={true}
                                    />
                                ) : (
                                    <span className="text-gray-800 dark:text-gray-200 pl-4">
                                        {task.title}
                                    </span>
                                )}
                            </span>
                            <EditAndDelete
                                onEdit={() => startEditing(task.id, task.title)}
                                onUpdate={() => updateTask(task.id)}
                                onDelete={() => deleteTask(task.id)}
                                isEditing={editingTaskId === task.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDo
