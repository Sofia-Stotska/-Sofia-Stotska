// const userList = document.getElementById("userList");
// const errorText = document.getElementById("error");

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Помилка");
//         }
//         return response.json();
//     })
//     .then(users => {
//         users.forEach(user => {
//             const li = document.createElement("li");
//             li.textContent = `${user.name} — ${user.email}`;
//             userList.appendChild(li);
//         });
//     })
//     .catch(() => {
//         errorText.textContent = "Помилка завантаження";
//     });

