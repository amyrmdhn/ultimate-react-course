# 🔄 Differences Between State and Props - EN

## 📦 State

State refers to internal data that is owned by the component where it is declared. It acts as the memory of the component, allowing it to store data over time, even when the component is re-rendered. The component itself can update the state, and whenever this update occurs, React re-renders the component. This re-rendering based on state changes is what makes components interactive.

## 🔗 Props

On the other hand, props are external data owned by the parent component, functioning similarly to function parameters. They serve as a communication channel between parent and child components, enabling the parent to pass data down to the child. Unlike state, props can only be read by the component that receives them, and they cannot be altered by that component. However, if the child component receives new props, this will also cause the component to re-render.

## 🔁 The Relationship Between State and Props

It is important to note that if a state is passed as props to another component, updating that state will trigger a re-render for both the component that owns the state and the component that receives the state as props. This illustrates the interconnection between state and props in React.

## 🔧 Purpose of State and Props

While state is crucial for making components interactive, props allow the parent component to configure the child component according to specific requirements. In this way, props can be viewed as settings within the child component that are determined by the parent component. <br><br>

# 🔄 Perbedaan Antara State dan Props - ID

## 📦 State

State merujuk pada data internal yang dimiliki oleh komponen tempat data tersebut dideklarasikan. State berfungsi sebagai memori komponen, memungkinkan komponen untuk menyimpan data seiring waktu, bahkan ketika komponen di-render ulang. Komponen itu sendiri dapat memperbarui state, dan setiap kali pembaruan ini terjadi, React akan me-render ulang komponen tersebut. Proses render ulang yang didasarkan pada perubahan state ini adalah yang membuat komponen menjadi interaktif.

## 🔗 Props

Sebaliknya, props adalah data eksternal yang dimiliki oleh komponen induk, berfungsi mirip dengan parameter fungsi. Props berfungsi sebagai saluran komunikasi antara komponen induk dan child, memungkinkan induk untuk meneruskan data ke child. Tidak seperti state, props hanya bisa dibaca oleh komponen yang menerimanya dan tidak dapat diubah oleh komponen tersebut. Namun, jika komponen child menerima props yang diperbarui, ini juga akan menyebabkan komponen tersebut di-render ulang.

## 🔁 Hubungan Antara State dan Props

Penting untuk dicatat bahwa jika state diteruskan sebagai props ke komponen lain, memperbarui state tersebut akan memicu render ulang baik pada komponen yang memiliki state maupun pada komponen yang menerima state sebagai props. Ini menggambarkan hubungan antara state dan props dalam React.

## 🔧 Tujuan State dan Props

Sementara state penting untuk membuat komponen menjadi interaktif, props memungkinkan komponen induk untuk mengonfigurasi komponen child sesuai kebutuhan tertentu. Dengan cara ini, props dapat dianggap sebagai pengaturan dalam komponen child yang ditentukan oleh komponen induk.
