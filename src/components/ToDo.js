import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'

const ToDo = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('api/v1/tasks', {
                    withCredentials: true
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

    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mt-8">
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
                        className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                    />
                    <Button
                        onClick={addTask}
                        variant="primary"
                        className="bg-black text-white hover:bg-gray-100 hover:text-black dark:bg-white dark:text-black dark:hover:bg-gray-800 dark:hover:text-white rounded py-1 px-3 mt-2">
                        Add Task
                    </Button>
                </div>
                <ul className="mt-6">
                    {tasks.map(task => (
                        <li
                            key={task.id}
                            className="border-b border-gray-300 dark:border-gray-700 py-6 flex items-center justify-between">
                            <span className="text-gray-800 dark:text-gray-200 pl-4">
                                {task.title}{' '}
                                {/* Assuming each task object has a name property */}
                            </span>
                            <div className="flex space-x-0">
                                <Button
                                    variant="destructive"
                                    className="float-right bg-black text-white hover:bg-gray-100 hover:text-black dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400 px-4 rounded mr-3">
                                    Edit
                                </Button>
                                <Button
                                    variant="destructive"
                                    className="float-right bg-black text-white hover:bg-gray-100 hover:text-black dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400 px-2 rounded mr-3">
                                    Delete
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDo
