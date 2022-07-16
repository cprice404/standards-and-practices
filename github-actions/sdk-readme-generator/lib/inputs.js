"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProjectStatus = exports.ProjectStatus = void 0;
const enums_1 = require("./enums");
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["OFFICIAL"] = "official";
    ProjectStatus["INCUBATING"] = "derp";
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
function validateProjectStatus(status) {
    return (0, enums_1.enumFromValue)(ProjectStatus, status);
}
exports.validateProjectStatus = validateProjectStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2lucHV0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFFdEMsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLHNDQUFxQixDQUFBO0lBQ3JCLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQUVELFNBQWdCLHFCQUFxQixDQUFDLE1BQWM7SUFDbEQsT0FBTyxJQUFBLHFCQUFhLEVBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBNkIsQ0FBQztBQUMxRSxDQUFDO0FBRkQsc0RBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2VudW1Gcm9tVmFsdWV9IGZyb20gJy4vZW51bXMnO1xuXG5leHBvcnQgZW51bSBQcm9qZWN0U3RhdHVzIHtcbiAgT0ZGSUNJQUwgPSAnb2ZmaWNpYWwnLFxuICBJTkNVQkFUSU5HID0gJ2RlcnAnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQcm9qZWN0U3RhdHVzKHN0YXR1czogc3RyaW5nKTogUHJvamVjdFN0YXR1cyB7XG4gIHJldHVybiBlbnVtRnJvbVZhbHVlKFByb2plY3RTdGF0dXMsIHN0YXR1cykgYXMgdW5rbm93biBhcyBQcm9qZWN0U3RhdHVzO1xufVxuIl19