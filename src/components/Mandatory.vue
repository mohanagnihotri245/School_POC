<template>
    <div class="merged-table">
      <h2 class="section-title">Mandatory Disclosure</h2>
      <table class="info-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>INFORMATION</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in mandatoryDisclosureData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.information }}</td>
            <td>{{ item.details }}</td>
          </tr>
        </tbody>
      </table>
  
      <h2 class="section-title">Document Information</h2>
      <table class="document-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>DOCUMENT INFORMATION</th>
            <th>DOCUMENT LINKS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in documentData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.information }}</td>
            <td>
              <a :href="item.link" target="_blank">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mandatoryDisclosureData: [
          { information: "NAME OF THE SCHOOL", details: "DELHI INTERNATIONAL SCHOOL EDGE, SEC-18, DWARKA, NEW DELHI" },
          { information: "AFFILIATION NO. (IF APPLICABLE)", details: "2730828" },
          { information: "SCHOOL CODE (IF APPLICABLE)", details: "25424" },
          { information: "COMPLETE ADDRESS WITH PIN CODE", details: "DELHI INTERNATIONAL SCHOOL EDGE, SEC-18, DWARKA, NEW DELHI-110075" },
          { information: "PRINCIPAL NAME & QUALIFICATION", details: "MS. ANUBHA SRIVASTAVA, M.Sc. B.Ed. NET" },
          { information: "SCHOOL EMAIL ID", details: "info@disedge.ac.in" },
          { information: "CONTACT DETAILS (LANDLINE/MOBILE)", details: "9599964446" }
        ],
        documentData: [
          { information: "Affiliation/Upgradation Letter & Recent Extension of Affiliation", link: "#" },
          { information: "Societies/Trust Registration Certificate", link: "#" },
          { information: "No Objection Certificate (NOC)", link: "#" },
          { information: "Recognition Certificate Under RTE Act 2009", link: "#" },
          { information: "Building Safety Certificate", link: "#" },
          { information: "Fire Safety Certificate", link: "#" },
          { information: "Deo Certificate for Affiliation/Upgradation/Extension", link: "#" },
          { information: "Water, Health & Sanitization Certificates", link: "#" },
          { information: "School Fee Structure", link: "#" },
          { information: "Annual Academic Calendar", link: "#" },
          { information: "List of School Management Committee", link: "#" },
          { information: "List of Parents Teachers Association Members", link: "#" },
          { information: "School Comprehensive Information", link: "#" },
          { information: "Books Prescribed", link: "#" },
          { information: "Land Certificate from DDA", link: "#" },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .merged-table {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .section-title {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin-top: 40px;
    color: #471edb;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  th, td {
    text-align: left;
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f9f9f9;
    font-weight: bold;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  @media (max-width: 768px) {
  /* Wrap the table in a div with overflow-x: auto to allow scrolling */
  .merged-table {
    padding: 10px;
  }
  
  table {
    display: block; /* Allows the table to become scrollable */
    width: 100%; /* Ensures it takes full width */
    overflow-x: auto; /* Enables horizontal scrolling */
    white-space: nowrap; /* Prevents table cells from wrapping */
  }

  th, td {
    padding: 8px; /* Reduce padding for smaller screens */
    font-size: 14px; /* Adjust font size for better readability */
  }

  .section-title {
    font-size: 20px; /* Smaller font for titles */
    margin-top: 30px; /* Adjusted margin for mobile view */
  }
}
  </style>
  