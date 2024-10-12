import React from 'react';
import './App.css';
import Dots from './components/Dots';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      
      {/* <div class="fixed-nav">
        <div class="logo">Portfolio</div>
      </div> */}
      <Dots />
      <div class="scroll-container">
        <div class="scroll-item">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body ">
              <h2>Welcome to my Portfolio!</h2>
              <p class="card-text">Here you can find information about my projects and skills.</p>
            </div>
            
          </div>
          <About/>
        </div>
        <div class="scroll-item">
          <h2>My Projects</h2>
          <div class="column">
            <Projects props={{ title: 'AI Chatbot with RAG', subtitle: 'Aug 2024', content: "Developed an AI chatbot using RAG. Learned the basics of RAG and implemented the application using Streamlit and LlamaIndex" }}/>
            <Projects props={{ title: 'Object Identifier using AWS Rekognition', subtitle: 'June 2024', content: "Implemented an object recognition system using AWS Rekognition and OpenCV. Learned the basics of AWS and implemented the application from scratch." }} />
            <Projects props={{ title: 'Glaucoma Prediction System using Segmentation and Few-Shot Learning', subtitle: 'Dec 2022-May 2023', content: "Created a hybrid ensemble architecture to detect glaucoma from fundus and OCT images that showed an improvement in accuracy by 3%. Designed a pipeline consisting of a segmentation model (U-Net) followed by a pre-trained model (VGG19) to predict glaucoma from fundus images. Developed a few-shot learning model (Siamese Network) to predict glaucoma from OCT images" }} />
            <Projects props={{ title: 'AI-Powered Nutritional Analyzer', subtitle: 'Aug 2022-Nov 2022', content: "Led a team of 4 to develop a web application that uses images taken from a device to educate the user about the nutritional value of the food item queried. Created a classification model to detect the food item queried and an API was used to retrieve nutritional content information which is rendered in a User Interface" }} />
            <Projects props={{ title: 'Handwritten Character Recognition using Few-Shot Learning', subtitle: 'Oct 2022-Nov 2022', content: "Designed multiple few-shot learning models (Siamese and Triplet networks) to detect handwritten characters from Tamil thereby achieving an accuracy of 96%" }} />
            <Projects props={{ title: 'Lung Cavern Detection using 3D CNN - ImageCLEF2022', subtitle: 'May 2021-July 2021', content: "Developed a deep learning model that uses 3D CT images with faster image retrieval to predict the variants of tuberculosis for a given patient thereby publishing the performed research" }} />
          </div>

        </div>
        <br/>
        <div class="scroll-item">
          <br/>
          <h2>Contact Me</h2>
          <div class="text-center justify-content-center">
            <h4 class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 20 20">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg> <a href="https://www.linkedin.com/in/sharvesh-s-68a6b7216/?trk=opento_sprofile_pfeditor" class="text-white">Sharvesh S</a> </h4>

            <h4>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg> <a href="https://github.com/shar0821" class="text-white">Sharvesh S</a> </h4>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;