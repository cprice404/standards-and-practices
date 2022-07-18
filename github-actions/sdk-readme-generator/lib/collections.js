"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayEquals = void 0;
function arrayEquals(a, b) {
    return (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]));
}
exports.arrayEquals = arrayEquals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29sbGVjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsV0FBVyxDQUFJLENBQVcsRUFBRSxDQUFXO0lBQ3JELE9BQU8sQ0FDTCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNO1FBQ3JCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzFDLENBQUM7QUFDSixDQUFDO0FBUEQsa0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbHM8VD4oYTogQXJyYXk8VD4sIGI6IEFycmF5PFQ+KSB7XG4gIHJldHVybiAoXG4gICAgQXJyYXkuaXNBcnJheShhKSAmJlxuICAgIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiZcbiAgICBhLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGJbaW5kZXhdKVxuICApO1xufVxuIl19