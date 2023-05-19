const selector = document.querySelector("#next");
selector.addEventListener("click", async () => {
    await fetch("/pets", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-next": selector.value
        }
    });
    window.location.replace("/pets?page=" + selector.value);
});
