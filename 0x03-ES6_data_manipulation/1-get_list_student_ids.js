export default function getListStudentIds(arr) {
  let ans = [];
  try {
    ans = arr.map((obj) => obj.id);
  } catch (error) {
    ans = [];
  }
  return ans;
}
