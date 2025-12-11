"use client";

import { Button } from "../Button/Button";
import { InputBox } from "../InputBox/InputBox";

interface AddTaskProps {
  handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
  formData: {
    headingVal: string;
    discriptionVal: string;
    tagval: " " | "important" | "not_important" | "todo" | "urgent";
  };

  handleValUpdate: (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function AddTaskForm({
  handleSubmit,
  formData,
  handleValUpdate,
}: AddTaskProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tag">Add Tag</label>
        <select
          id="tag"
          name="tagval"
          value={formData.tagval}
          onChange={handleValUpdate}
        >
          <option value="">Select Tag</option>
          <option value="important">Important</option>
          <option value="todo">To Do</option>
          <option value="urgent">Urgent</option>
          <option value="not_important">Not Important</option>
        </select>
      </div>
      <div>
        <label htmlFor="addTaskHeading">Heading</label>
        <InputBox
          id="addTaskHeading"
          type="text"
          inputName="headingVal"
          handleChagne={handleValUpdate}
          value={formData.headingVal}
          required={false}
          readonly={false}
        />
      </div>
      <div>
        <label htmlFor="addTaskDiscription">Discription</label>
        <InputBox
          id="addTaskDiscription"
          type="textarea"
          inputName="discriptionVal"
          value={formData.discriptionVal}
          handleChagne={handleValUpdate}
          required={false}
          readonly={false}
        />
      </div>
       {/* Assigned to search component will be here later */}
      
      <Button variant="primary" type='submit'>Add Task</Button>
    </form>
  );
}
