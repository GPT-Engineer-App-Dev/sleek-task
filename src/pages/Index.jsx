import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
  Checkbox,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex justify="center" mb={6}>
        <Heading as="h1" size="xl">
          Todo App
        </Heading>
      </Flex>
      <VStack spacing={4}>
        <Flex width="100%">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            mr={2}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </Flex>
        <List width="100%">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              borderBottom="1px"
              borderColor="gray.200"
            >
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                mr={2}
              >
                <Text as={task.completed ? "s" : ""}>{task.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => deleteTask(index)}
                colorScheme="red"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;