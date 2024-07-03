// 1-get_list_student_ids.js

const getListStudentIds = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map(student => student.id);
};

export default getListStudentIds;

