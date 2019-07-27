const youtubeUrl = [
  "YQJj3vfCSJ4",
  "9R5kqk4awrQ",
  "BSMmJqzZPQQ",
  "626PUwqGdqw",
  "O4uN-IgbrG8",
  "4u020A9SKps",
  "K2pQH3TbyRw",
  "wcxfFzr_N30"
];

const addProperties = () => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
};

$(() => {
  addProperties();
  let urls = [];
  do {
    let id = youtubeUrl.random();
    if (!urls.includes(id)) urls.push(id);
  } while (urls.length < 3);

  $.each($("#video").find("iframe"), (index, $elem) => {
    $elem.src = `https://www.youtube.com/embed/${urls[index]}`;
  });
});
