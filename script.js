const body = document.querySelector('body');
const app = document.querySelector('.container');
const delayedPromo = () => {
  app.innerHTML += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Thanks for stopping by!</strong> Check out my monthly specials on the <a class="alert-link text-decoration-none" href="rates.html" alt="shannon beelman photography session rates">Rates</a> page.
      <button type="button" class="btn btn-close" data-dismiss="alert" aria-label="Close">
        <!-- <span aria-hidden="true">&times;</span> -->
      </button>
    </div>`;
};
document.addEventListener('DOMContentLoaded', setTimeout(delayedPromo, 2000));
