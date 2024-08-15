import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { addTaskToList } from '../app.js';

describe('To-Do List', function() {
  let document;
  let taskList;

  beforeEach(() => {
    const dom = new JSDOM('<!doctype html><html><body><ul id="tasks"></ul></body></html>');
    document = dom.window.document;
    taskList = document.getElementById('tasks');
  });

  it('should add a new task to the list', function() {
    const task = 'Buy groceries';
    addTaskToList(task);
  })

})