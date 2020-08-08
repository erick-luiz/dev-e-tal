import React, { useState } from 'react';
import MainButton from '../../global/components/MainButton';

import './style.css';

import nextIcon from '../../assets/images/icons/next.png';
import previousIcon from '../../assets/images/icons/previous.png';
import trashIcon from '../../assets/images/icons/trash.png';

interface Task {
    title: string,
    done: boolean,
}

interface TaskByDay {
    tasks: Array<Task>,
    date: string,
}

function TodoListView(){
    
    const getPrevious = (str: string) => {
        let month = +str.replace(/\d*-(\d*)-\d*/,"$1");
        let date = new Date(str.replace(/(\d*)-\d*-(\d*)/,`$1-${month}-$2`));
        return dateAsString(new Date(date.setDate(date.getDate() - 1)));
    }

    const getNext = (str: string) => {
        let month = +str.replace(/\d*-(\d*)-\d*/,"$1");
        let date = new Date(str.replace(/(\d*)-\d*-(\d*)/,`$1-${month}-$2`));
        return dateAsString(new Date(date.setDate(date.getDate() + 1)));
    }

    const getToday = () => {
        return dateAsString(new Date());
    }

    const dateAsString = (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth() === 11?0:date.getMonth() + 1}-${date.getDate()}`;
    }

    const getTasks = (tasksByDay: Array<TaskByDay>, date: string) => {
        
        for(let i = 0; i < tasksByDay.length; i++){
            if(tasksByDay[i].date === date){
                return tasksByDay[i].tasks;
            }
        }

        return [];
    }

    const [selectedDay, setSelectedDay]= useState(getToday());
    const storageTasks = localStorage.getItem('@todo-list/tasks') || '[{}]';
    let objStorageTasks = JSON.parse(storageTasks);

    const [tasks, setTasks] = useState(getTasks(objStorageTasks, selectedDay) as Array<Task>);
    
    const [newTask, setNewTask] = useState('');

    const handleAddTask = (e: any) => {
        e.preventDefault();
        
        let newTasks = [...tasks, {title: newTask, done:false}];
        newTasks.sort((task: Task) => task.done? 1: -1) ;
        setTasks(newTasks);
        _setTasksDate(newTasks, selectedDay);

        _saveLocal();
        setNewTask('');
    }

    const _saveLocal = () => {
        localStorage.setItem('@todo-list/tasks',JSON.stringify(objStorageTasks));
    }

    const _setTasksDate = (newTasks: Array<Task>, date: string) => {
        let found = false;
        for(let i = 0; i < objStorageTasks.length; i++){
            if(objStorageTasks[i].date === date){
                found = true; 
                objStorageTasks[i].tasks = newTasks;
            }
        }
        if(!found) objStorageTasks.push({date: date, tasks: newTasks});
    }

    const changeDoneStatus = (idx: number) => {

        let newTasks = tasks.map((task: Task, i: number) => {
            if(i === idx){
                return {title: task.title, done: !task.done};
            }
            return task;
        });
        newTasks.sort((task: Task) => task.done? 1: -1);
        setTasks(newTasks);
        _setTasksDate(newTasks, selectedDay);
        _saveLocal();
    }

    const removeTask = (idx: number) => {

        let newTasks = tasks.filter(((task: Task, i: number) => {
            return idx !== i;
        }));

        newTasks.sort((task: Task) => task.done? 1: -1);
        
        setTasks(newTasks);
        _setTasksDate(newTasks, selectedDay);
        _saveLocal();
        setNewTask('');
    }
    
    const changeNewTask = (e: any) => {
       setNewTask(e.target.value);
    }

    const nextDate = (e: any) => {
        e.preventDefault();
        let newDate = getNext(selectedDay);
        setSelectedDay(newDate);
        setTasks(getTasks(objStorageTasks, newDate));
    }

    const previousDate = (e: any) => {
        e.preventDefault()
        let newDate = getPrevious(selectedDay);
        setSelectedDay(newDate);
        setTasks(getTasks(objStorageTasks, newDate));
    }

    return (<div className="todo-list-component">
        <div id="todo-list-menu" className="header">
            {/*/ style="margin:5px" /*/}
            <div className="header-title">
            <img onClick={previousDate} src={previousIcon} alt="Icone de preview" />
            <h2>Tarefas {selectedDay} </h2>
            <img onClick={nextDate} src={nextIcon} alt="Icone de next" />
            </div>
            <form onSubmit={handleAddTask} >
            <input 
                type="text" 
                id="myInput" 
                placeholder='Title...'
                onChange={changeNewTask} 
                value={newTask}
                required
            />
            {/*onClick="newElement()"*/}
            <button type="submit" className="add-task">Add</button>
            </form>
        </div>

        <div className="navegation">
            <MainButton onClick={previousDate} label="&laquo; Anterior" />
            <MainButton onClick={nextDate} label="Próximo &raquo;" />
        </div>

        <ul id="todo-list-content">
            {tasks.map((task: Task, idx: number) => 
                <li className={task.done? 'checked': ''} key={`id_${idx}_${task.title}`} > 
                    <div>
                        <span 
                            onClick={() => changeDoneStatus(idx)} 
                            className={task.done? 'checked': ''} >
                            {task.title as string}
                        </span>

                        <img 
                            src={trashIcon} 
                            alt="lixeira" 
                            className="trash"
                            onClick={() => removeTask(idx)}
                            />
                    </div>
                </li>
                )}
        </ul>

        {/*
            <div className="report">
                <MainButton label="Gerar Relatório" />
            </div>
        */}
    </div>);
}

export default TodoListView;