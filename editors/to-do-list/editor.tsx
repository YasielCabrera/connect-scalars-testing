/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/jsx-no-bind */
import { EditorProps } from "document-model/document";
import {
  ToDoListState,
  ToDoListAction,
  ToDoListLocalState,
  ToDoItem,
  actions,
} from "../../document-models/to-do-list";
import { useState } from "react";
import { Button, Form, StringField } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  ToDoListState,
  ToDoListAction,
  ToDoListLocalState
>;

export default function Editor(props: IProps) {
  const { document, dispatch } = props;
  const {
    state: { global: state },
  } = document;

  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState("");

  // Sort items by checked status
  const sortedItems: ToDoItem[] = [...state.items].sort((a, b) => {
    return (b.checked ? 1 : 0) - (a.checked ? 1 : 0);
  });

  function addTodoItem(data: { text: string }) {
    dispatch(
      actions.addTodoItem({
        id: Math.random().toString(),
        text: data.text,
      }),
    );
  }

  return (
    <div>
      <div>
        <h1>To-do List</h1>
        <br />
        <Form onSubmit={addTodoItem}>
          <div className="flex gap-2 items-center">
            <StringField
              minLength={3}
              name="text"
              placeholder="Insert task here..."
              required
            />
            <Button type="submit">Add</Button>
          </div>
        </Form>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: 2, marginTop: "20px" }}>
            {sortedItems.map((item: ToDoItem) => (
              <ul key={item.id}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    checked={item.checked}
                    onChange={() => {
                      dispatch(
                        actions.updateTodoItem({
                          id: item.id,
                          checked: !item.checked,
                        }),
                      );
                    }}
                    type="checkbox"
                  />
                  <button
                    onClick={() => {
                      dispatch(
                        actions.deleteTodoItem({
                          id: item.id,
                        }),
                      );
                    }}
                    style={{
                      color: "red",
                      padding: "0px 5px 0px 5px",
                    }}
                    type="button"
                  >
                    Remove
                  </button>
                  {editingItemId === item.id ? (
                    <input
                      autoFocus
                      onChange={(e) => setEditedText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(
                            actions.updateTodoItem({
                              id: item.id,
                              text: editedText,
                            }),
                          );
                          setEditingItemId(null);
                        }
                      }}
                      style={{ width: "100%" }}
                      type="text"
                      value={editedText}
                    />
                  ) : (
                    <span
                      onClick={() => {
                        setEditingItemId(item.id);
                        setEditedText(item.text);
                      }}
                      style={{
                        fontSize: "15px",
                        marginLeft: "10px",
                        cursor: "pointer",
                      }}
                    >
                      {item.text}
                    </span>
                  )}
                </li>
              </ul>
            ))}
          </div>
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            {state.items.length >= 2 && (
              <button
                onClick={() => {
                  state.items.forEach((item) => {
                    dispatch(
                      actions.deleteTodoItem({
                        id: item.id,
                      }),
                    );
                  });
                }}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                type="button"
              >
                Remove All Todos
              </button>
            )}
          </div>

          <div style={{ flex: 1, paddingLeft: "10px" }}>
            <span>Total: {state.stats.total}</span>
            <br />
            <span>Checked: {state.stats.checked}</span>
            <br />
            <span>Unchecked: {state.stats.unchecked}</span>
          </div>
        </div>
      </div>
    </div >
  );
}
