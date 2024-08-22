<template>
    <div class="about-us-container">
      <div class="content">
        <h2>COLLEGE AT A GLANCE</h2>
        <img src="https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/gee9sm1raqw0yyditq7n" alt="College Image">
        <p>
          Founded in 1954 by truly nationalist people, Arya PG College, Panipat has the distinction of being one of the oldest colleges in Haryana, adjoining to Delhi...
        </p>
      </div>
      <div class="sidebar">
        <h3>About Us</h3>
        <ul>
          <li :class="{ active: activeTab === 'CollegeAtGlance' }" @click="setActiveTab('CollegeAtGlance')">
            College At Glance
          </li>
          <li :class="{ active: activeTab === 'PresidentMessage' }" @click="setActiveTab('PresidentMessage')">
            President Message
          </li>
          <li :class="{ active: activeTab === 'PrincipalMessage' }" @click="setActiveTab('PrincipalMessage')">
            Principal Message
          </li>
          <li :class="{ active: activeTab === 'GoverningBody' }" @click="setActiveTab('GoverningBody')">
            Governing Body
          </li>
          <li :class="{ active: activeTab === 'CollegeMissionVision' }" @click="setActiveTab('CollegeMissionVision')">
            College Mission & Vision
          </li>
          <li :class="{ active: activeTab === 'Dignitaries' }" @click="setActiveTab('Dignitaries')">
            Dignitaries
          </li>
          <li :class="{ active: activeTab === 'CollegeStaff' }" @click="setActiveTab('CollegeStaff')">
            College Staff
          </li>
          <li :class="{ active: activeTab === 'RecognitionOfTheCollege' }" @click="setActiveTab('RecognitionOfTheCollege')">
            Recognition Of The College
          </li>
          <li :class="{ active: activeTab === 'CollegeTour' }" @click="setActiveTab('CollegeTour')">
            College Tour
          </li>
          <li :class="{ active: activeTab === 'ISO9001Certification' }" @click="setActiveTab('ISO9001Certification')">
            ISO-9001 CERTIFICATION
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 'CollegeAtGlance'
      };
    },
    computed: {
      activeTabComponent() {
        return this.activeTab;
      }
    },
    methods: {
      setActiveTab(tabName) {
        this.activeTab = tabName;
      }
    }
  };
  </script>
  
  <style scoped>
  .about-us-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .content {
    width: 70%; /* Adjust width as needed */
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 20px; /* Space between content and menu */
  }
  
  .sidebar {
    width: 25%; /* Adjust width as needed */
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f8f8f8;
    text-align: left; /* Align text to the left */
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar li {
    padding: 10px;
    cursor: pointer;
    color: #333;
  }
  
  .sidebar li.active {
    font-weight: bold;
    background-color: #800000; /* Maroon background for active state */
    color: white;
  }
  
  h2, h3 {
    margin-top: 0;
  }
  
  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  </style>
  