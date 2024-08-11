// import bcrypt from "bcryptjs"
// // 在组件中使用
// export default {
//   methods: {
//     async encryptPassword(password: string): Promise<string> {
//       const saltRounds = 10;
//       const salt = await bcrypt.genSalt(saltRounds);
//       const hash = await bcrypt.hash(password, salt);
//       return hash;
//     },
//     async checkPassword(inputPassword: string, storedHash: string): Promise<boolean> {
//         const isMatch = await bcrypt.compare(inputPassword, storedHash);
//         return isMatch;
//       }
//   }
// }