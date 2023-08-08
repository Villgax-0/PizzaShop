async function doNetworkcall() {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/Dhruvgarg91/ff8347e5fded74a0d4578eeabf1a2f2b/raw/05694902f615a8d63a4506e968e992c6acd55bba/Pizza.json"
    );
    console.log("Response is", response);
    const object = await response.json();
    console.log("Json is", object);
    return object;
  } catch (err) {
    console.log("error is", err);
    throw err;
  }
}

export default doNetworkcall;