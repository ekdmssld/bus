function renderSchedule(direction) {
  const container = document.getElementById('scheduleContainer');
  const scheduleData = busSchedule[direction];

  let html = `
      <table class="schedule-table">
        <thead>
          <tr>
            ${scheduleData.headers
              .map((header) => `<th>${header}</th>`)
              .join('')}
          </tr>
        </thead>
        <tbody>
          ${scheduleData.schedules
            .map(
              (schedule) => `
              <tr>
                <td>${schedule.route}</td>
                <td>${schedule.yeongnamru || '-'}</td>
                <td>${schedule.station || '-'}</td>
                <td>${schedule.university || '-'}</td>
              </tr>
            `
            )
            .join('')}
        </tbody>
      </table>
    `;

  container.innerHTML = html;
}
