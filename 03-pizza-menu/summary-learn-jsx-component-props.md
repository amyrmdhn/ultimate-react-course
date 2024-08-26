# 📚 React JS - Section Recap - EN

## 🎨 Components

- **Components** are basically the building blocks of any UI in React.
- I think of each component as its own little world—handling its own data, logic, and look.
- I use **JSX** to describe what each component should look like, kind of like writing HTML but with superpowers.
- In JSX, I can mix:
  - **HTML** structure
  - **CSS** styles using the `style`, `className` props
  - **JavaScript** logic within curly braces `{}`

## 🌳 The Component Tree

A full React app is like a tree made up of components, called the **component tree**.
The components at the top are **parent components**, and they include or use the components below them, known as **child components**.

For example, in my Pizza App:

- `App` is the parent of `Header`, `Menu`, and `Footer`.
- `Menu` is the parent of all the `Pizza` components.
- `Footer` is the parent of `Order`.

A component can be both a parent and a child at the same time.

## 🔗 Passing Data Around with Props

- **Props** are like the way I pass data from parent components to child components.
- But, props only flow **down** the tree—from parent to child, never the other way around.
- I used props to render a bunch of pizzas by creating a single `Pizza` component and passing different `pizza` objects into it.

## 🔄 Lists and Conditional Rendering

- I rendered a list of pizzas by looping over an array with the JavaScript `map` method.
- I also learned how to show or hide components based on certain conditions—this is called **conditional rendering**. <br>
  I did this using:
  - The `&&` operator
  - The ternary operator (`? : `)
  - Multiple return statements based on conditions

## 🧠 Some Theory Stuff

I also touched on a few theoretical concepts:

- The difference between **Imperative** and **Declarative** approaches
- How React helps with **separation of concerns**
- And why it’s a bad idea to **mutate props**

---

<br>

# 📚 React JS - Ringkasan - ID

## 🎨 Komponen

- **Komponen** pada dasarnya adalah blok penyusun dari setiap UI di React.
- Saya menganggap setiap komponen sebagai dunia kecilnya sendiri—mengelola data, logika, dan tampilannya sendiri.
- Saya menggunakan **JSX** untuk menggambarkan seperti apa tampilan setiap komponen, mirip seperti menulis HTML tetapi dengan kemampuan lebih.
- Dalam JSX, saya bisa mencampur:
  - Struktur **HTML**
  - Gaya **CSS** menggunakan properti `style`, `className`
  - Logika **JavaScript** di dalam kurung kurawal `{}`

## 🌳 Struktur Komponen

Sebuah aplikasi React penuh seperti pohon yang terdiri dari komponen-komponen, disebut sebagai **struktur komponen**. Komponen-komponen di bagian atas disebut **parent component**, dan mereka menyertakan atau menggunakan komponen-komponen di bawahnya, yang dikenal sebagai **child component**.

Sebagai contoh, dalam Aplikasi Pizza saya:

- `App` adalah parent dari `Header`, `Menu`, dan `Footer`.
- `Menu` adalah parent dari semua komponen `Pizza`.
- `Footer` adalah parent dari `Order`.

Sebuah komponen bisa menjadi parent dan child pada saat yang sama.

## 🔗 Mengoper Data dengan Props

- **Props** seperti cara saya mengoper data dari komponen parent ke komponen child.
- Tetapi, props hanya mengalir **ke bawah** dalam struktur komponen—dari parent ke child, tidak pernah sebaliknya.
- Saya menggunakan props untuk merender beberapa pizza dengan membuat satu komponen `Pizza` dan mengoper objek `pizza` yang berbeda ke dalamnya.

## 🔄 Daftar dan Perenderan Bersyarat

- Saya merender daftar pizza dengan melakukan loop pada array menggunakan metode `map` dalam JavaScript.
- Saya juga belajar bagaimana menampilkan atau menyembunyikan komponen berdasarkan kondisi tertentu—ini disebut **perenderan bersyarat**. <br>
  Saya melakukan ini menggunakan:
  - Operator `&&`
  - Operator ternary (`? : `)
  - Beberapa pernyataan return berdasarkan kondisi

## 🧠 Beberapa Konsep Teori

Saya juga mempelajari beberapa konsep teori:

- Perbedaan antara pendekatan **Imperatif** dan **Deklaratif**
- Bagaimana React membantu dengan **separation of concerns**
- Dan mengapa merupakan ide buruk untuk **mutate props**

---
