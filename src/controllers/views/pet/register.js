export default async (req, res) => {
    return res.status(201).render("form", {
        css: "/public/styles/main.css",
        title: "REGISTER PET",
        navigation: [
            { link: "/pets", text: "SEE PETS" },
            { link: "/pets/form", text: "CREATE PET" }
        ],
        mainTitle: "REGISTER PET"
    });
};
