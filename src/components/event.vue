<template>
  <div class="margin-top-50 padding-bottom-50">
    <div class="container flex-container">
      <!-- Latest News Column -->
      <div class="flex-item">
        <div class="latest-news">
          <div class="heading-sect">
            <h3 class="head-title">Latest News</h3>
          </div>
          <marquee behavior="" direction="up">
            <ul class="latest-news-ul">
              <li>31 Mar 2024 PHD merit list part 01-15</li>
              <li>31 Mar 2024 PHD merit list part 01-15</li>
              <li>31 Mar 2024 PHD merit list part 01-15</li>
              <li>31 Mar 2024 PHD merit list part 01-15</li>
              <li>31 Mar 2024 PHD merit list part 01-15</li>
            </ul>
          </marquee>
        </div>
      </div>

      <!-- Upcoming Events Column -->
      <div class="flex-item">
        <div class="event-list">
          <div class="heading-sect">
            <h3 class="head-title">Upcoming Events</h3>
          </div>
          <ul class="upcoming-event-list">
            <li><span class="event-date">31 <br> Mar</span> <span>PHD merit list part 01-15</span></li>
            <li><span class="event-date">31 <br> Mar</span> <span>PHD merit list part 01-15</span></li>
            <li><span class="event-date">31 <br> Mar</span> <span>PHD merit list part 01-15</span></li>
            <li><span class="event-date">31 <br> Mar</span> <span>PHD merit list part 01-15</span></li>
            <li><span class="event-date">31 <br> Mar</span> <span>PHD merit list part 01-15</span></li>
            <li><span class="event-date">31 <br> Mar</span> <span>PHD merit list part 01-15</span></li>
          </ul>
        </div>
      </div>

      <!-- Third Column (Similar to the others) -->
      <div class="flex-item">
        <div class="additional-section">
          <div class="heading-sect">
            <h3 class="head-title">Additional Section</h3>
          </div>
          <ul class="additional-section-list">
            <li>31 Mar 2024 Additional Info 01</li>
            <li>31 Mar 2024 Additional Info 02</li>
            <li>31 Mar 2024 Additional Info 03</li>
            <li>31 Mar 2024 Additional Info 04</li>
            <li>31 Mar 2024 Additional Info 05</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ThreeColumnComponent",
};
</script>

<style scoped>
.margin-top-50 {
  margin-top: 50px;
}

.padding-bottom-50 {
  padding-bottom: 50px; /* Increased bottom padding */
}

.container {
  display: flex;
  flex-wrap: wrap; /* Prevents wrapping */
  gap: 20px; /* Spacing between columns */
}

.flex-item {
  flex: 1; /* Equal width for all columns */
  box-sizing: border-box;
}

.latest-news,
.event-list,
.additional-section {
  background: #fff;
  border: 1px solid #f5f5f5; /* Off-White border */
  padding-left: 20px;
  padding-right: 20px;
  height: 350px; /* Fixed height for equal sizing */
  margin-bottom: 30px;
  overflow: hidden; /* Hide overflow for columns except the middle one */
  position: relative; /* Allows positioning of sticky heading */
}

.event-list {
  overflow-y: auto; /* Add vertical scroll to the middle column */
}

.heading-sect {
  position: sticky;
  top: 0; /* Fixes the heading to the top of the column */
  z-index: 1; /* Ensures the heading is above other content */
  width: calc(100% + 40px); /* Adjust for padding and margin if needed */
  margin-left: -20px; /* Align with the container's padding */
  border-bottom: 1px solid #cfcfcf;
  padding: 15px;
  background: #00aed9;
  color: #fff;
}

.head-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.latest-news-ul,
.upcoming-event-list,
.additional-section-list {
  padding: 0;
  list-style: none;
  line-height: 40px;
}

.upcoming-event-list li,
.additional-section-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.event-date {
  background: #00aed9;
  width: 40px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  padding: 5px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Stack columns vertically */
    gap: 10px; /* Reduce gap for smaller screens */
  }

  .flex-item {
    width: 100%; /* Full width for each item in mobile view */
  }

  .latest-news,
  .event-list,
  .additional-section {
    height: auto; /* Allow sections to adjust height dynamically */
    padding: 15px 10px; /* Adjust padding for smaller screens */
  }

  .heading-sect {
    width: 100%; /* Ensure the sticky header fits the container */
    margin-left: 0; /* Remove negative margin on mobile */
  }

  .event-date {
    width: 30px; /* Smaller date box for mobile */
    font-size: 12px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .event-list {
    height: 250px; /* Fixed height for scrolling in mobile view */
    overflow-y: auto; /* Ensure scroll works on mobile as well */
  }

  .head-title {
    font-size: 14px; /* Slightly smaller title font size */
  }
}
</style>
