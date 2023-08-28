import * as lineTool from "./line"
import * as selectTool from "./select"
import * as circleTool from "./circle"
import * as clearTool from "./clear"
import * as undoTool from "./undo"
import * as redoTool from "./redo"
import * as pencilTool from "./pencil"

export const tools = {
  [selectTool.config.name]: selectTool.config,
  [pencilTool.config.name]: pencilTool.config,
  [lineTool.config.name]: lineTool.config,
  [circleTool.config.name]: circleTool.config,
  [undoTool.config.name]: undoTool.config,
  [redoTool.config.name]: redoTool.config,
  [clearTool.config.name]: clearTool.config
}
