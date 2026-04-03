function showInfo(type) {
  let text = "";

  if (type === "electronics") {
    text = "The Electronics division develops the embedded hardware and electronic architecture that powers robotic platforms.  This includes circuit design, sensor integration, communication systems, and power management required for reliable robotic operation.";
  }
  else if (type === "ai") {
    text = "The Artificial Intelligence division focuses on developing algorithms that enable robotic autonomy. Work in this area includes computer vision, machine learning, and navigation systems that allow robots to perceive their environment and operate with minimal human intervention.";
  }
  else if (type === "mechanical") {
    text = "The Mechanical Systems division designs the structural and mobility components of robotic platforms. The team develops chassis structures, actuation mechanisms, and mobility systems that enable robots to function in challenging environments.";
  }
  else if (type === "management") {
    text = "Management handles planning, coordination, sponsorships, and team organization.It ensures collaboration across all divisions while organizing events, partnerships, and club activities.";
  }

  document.getElementById("info-box").innerText = text;
}function filterEvents(type) {
  let events = document.querySelectorAll(".event");

  events.forEach(event => {
    if (type === "all" || event.dataset.type === type) {
      event.style.display = "block";
    } else {
      event.style.display = "none";
    }
  });
}
// TEAM
function toggleTeamCard(el) {
  // close others
  document.querySelectorAll('.team-lead-card').forEach(c => {
    if (c !== el) c.classList.remove('open');
  });
  el.classList.toggle('open');
}

function toggleDesc(el) {
  el.classList.toggle('open');
}
// GALLERY
const galleryData = [
  { src: "gallery/img1.jpg", caption: "Robotics Bootcamp" },
  { src: "gallery/img2.jpg", caption: "Rover Build Session" },
  { src: "gallery/img3.jpg", caption: "AI Hackathon 2026" },
  { src: "gallery/img4.jpg", caption: "Team @ Space Talk" },
  { src: "gallery/img5.jpg", caption: "Inter-College Rover" },
];

let currentImg = 0;

function openLightbox(index) {
  currentImg = index;
  document.getElementById('lb-img').src = galleryData[index].src;
  document.getElementById('lb-caption').textContent = galleryData[index].caption;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function shiftImage(dir) {
  currentImg = (currentImg + dir + galleryData.length) % galleryData.length;
  document.getElementById('lb-img').src = galleryData[currentImg].src;
  document.getElementById('lb-caption').textContent = galleryData[currentImg].caption;
}

// CONTACT COPY
function copyText(text, el) {
  navigator.clipboard.writeText(text);
  const hint = el.querySelector('.copy-hint');
  hint.textContent = '✓ copied!';
  hint.classList.add('copied');
  setTimeout(() => {
    hint.textContent = 'click to copy';
    hint.classList.remove('copied');
  }, 2000);
}