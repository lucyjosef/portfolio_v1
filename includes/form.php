<section id="form-section">
    <div class="container">
        <!-- FORM
        <form class="form-controller" method="POST" action="#formulaire">
            <label for="completename">Nom et prénom : </label>
            <input name="completename" id="completename" type="text">
            <label for="job">Fonction : </label>
            <input name="job" id="job" type="text">
            <label for="company">Société : </label>
            <input name="company" id="company" type="text">
            <label for="email">E-mail : </label>
            <input name="email" id="email" type="text">
            <label for="message">Message : </label>
            <textarea rows="10" name="message" id="message"></textarea>
            <input type="submit" name="submit" value="ENVOYER !">
        </form>
        -->
        <form id="contact-form" class="text-center" action="#form-section" method="POST">
            <h2>Éh Lucie !</h2>
            <p>Mon
              <label for="your-name">nom</label> est<br>
              <input type="text" name="your-name" id="your-name" minlength="3" placeholder="(votre nom)" required></p>
            <p>Je suis joignable à cet
              <label for="email">email</label><br>
              <input type="email" name="your-email" id="email" placeholder="(votre email)" required>
            </p>
            <p>Je fais partie de la
              <label for="company">société</label><br>
              <input type="company" name="your-company" id="company" placeholder="(Votre société)">
            </p>
            <p>
              <label for="job">En tant que</label><br>
              <input type="job" name="your-job" id="job" placeholder="(Votre fonction)">
            </p>
            <p> Et j'ai un
                <label for="your-message">message</label> pour toi !
            </p>
            <p>
                <textarea name="your-message" id="your-message" placeholder="(Votre message)" class="expanding" required></textarea>
            </p>
            <p>
                <button type="submit">
                  <svg version="1.1" class="send-icn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="36px" viewBox="0 0 100 36" enable-background="new 0 0 100 36" xml:space="preserve">
                    <path d="M100,0L100,0 M23.8,7.1L100,0L40.9,36l-4.7-7.5L22,34.8l-4-11L0,30.5L16.4,8.7l5.4,15L23,7L23.8,7.1z M16.8,20.4l-1.5-4.3
                     l-5.1,6.7L16.8,20.4z M34.4,25.4l-8.1-13.1L25,29.6L34.4,25.4z M35.2,13.2l8.1,13.1L70,9.9L35.2,13.2z" />
                  </svg>
                </button>
            </p>
        </form>
    </div>
</section>
