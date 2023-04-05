export default function handler(req, res) {
  res.status(200).json({
    data: [
      {
        name: "nikos",
        age: 18,
        online: true,
        items: ["keys", "car", "pen"],
        pets: [
          {
            name: "Bruno",
            type: "dog",
          },
          {
            name: "Mary",
            type: "cat",
          },
        ],
      },
      {
        name: "danny",
        age: 30,
        online: true,
        items: ["keys", "car", "pen"],
        pets: [
          {
            name: "Bruno",
            type: "dog",
          },
          {
            name: "Mary",
            type: "cat",
          },
        ],
      },
      {
        name: "peter",
        age: 25,
        online: false,
        items: ["keys", "car", "pen"],
        pets: [
          {
            name: "Bruno",
            type: "dog",
          },
          {
            name: "Mary",
            type: "cat",
          },
        ],
      },
    ],
  });
}
