import trainingLoss from "../assets/images/training-loss.png"
// To add the images to projects page, add them to assets/images, import here

// Just add the the details for each project
const projects = [
    {   id: 1,
        name: "Training Loss",
        description: "I have trained the ResNet18 model with the modified classifier with three different learning rates, as given in the task. The graphs for Training Loss, Validation Loss and Validation F1",
        technologies : ["python", "seocnd", "third"],
        picture: trainingLoss, // Picture
        link: {0: "https://github.com/hseysen/PlayingCardsClassification", 1: "Github Repo"}, // Write like this so the link looks cleaner
    },
    {   id: 2,
        name: "Project1",
        description: "Some desc",
        technologies : ["python", "matlib"],
        picture: trainingLoss,
        link: "dkcjjdkkjd",

    },
    {   id: 3,
        name: "Project1",
        description: "Some desc",
        technologies : ["python", "matlib"],
        picture: trainingLoss,
        link: "",

    },

];

export default projects;
