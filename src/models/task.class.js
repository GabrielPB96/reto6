import { Level } from "./level.enum";
export class Task {
  constructor(name, description, completed = false, level = Level.NORMAL) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level;
  }
}
