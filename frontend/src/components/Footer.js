import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Container className="footer">
            <hr/>
                <Row>
                    <Col className='text-center py-3'>
                        <Link to="/about">
                        <div><i class="fa-solid fa-laptop-code"></i> &nbsp; Documentation et outils</div>
                        </Link>
                        <hr/>
                        <div>Copyright &copy; Football News App</div>
                        <div>Football News App</div>
                        <div>
                            Made in <svg xmlns="http://www.w3.org/2000/svg" width="42px" height="42px" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#f42f4c"/><path d="M23.3 44l3.3-9.9l-8.6-6.2h10.7L32 18l3.3 9.9H46L37.3 34l3.3 9.9l-8.6-6l-8.7 6.1m10.5-7.4l2.7 1.9l-1-3.1l-1.7 1.2m-5.3-1.2l-1 3.1l2.7-1.9l-1.7-1.2m.7-2.1l2.8 2l2.8-2l-1.1-3.2h-3.5l-1 3.2m-4.5-3.2l2.7 1.9l.6-1.9h-3.3M36.6 32l2.7-1.9H36l.6 1.9M31 27.9h2l-1-3.1l-1 3.1" fill="#4f682e"/></svg>
                        </div>
                    </Col>
                    <Col>
                    <Image src="/media/logo.png" alt="logo" width={120} fluid/>
                    <div>Projet en Django et ReactJS</div>
                    <div><i class="fa-solid fa-user-group"></i> &nbsp; Realisateur:
                        <li>Younes AMZIL</li>
                        <li>Abderrahim KHALIDI</li>
                    </div>
                    <div><i class="fa-solid fa-person-chalkboard"></i> &nbsp; Encadrant: <li>Zineb Hidila</li></div>
                    </Col>
                    <Col>
                    <div>
                        <a href="https://github.com/0xUNS/FootballApp-Django">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 16 16"><path fill="rgb(149, 157, 165)" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                        &nbsp; Github</a>
                    </div>
                    <div>
                        <a href="https://ma.linkedin.com/in/younes-amzil-a09027199?trk=public_profile_samename-profile">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 19 18"><path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" fill="rgb(149, 157, 165)"/></svg>
                        &nbsp; LinkedIn</a>
                    </div>
                    <div>
                        <a href="http://127.0.0.1:8000/api/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 16 16"><path d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"  fill="rgb(149, 157, 165)"></path></svg>
                        &nbsp; API</a>
                    </div>
                <hr/>
                    <div>
                        <a href="https://www.emsi.ma/">
                        <img src="https://www.emsi.ma/wp-content/uploads/2020/07/LOGO-2-400x87.png" alt="EMSI Orangers" height="30" />
                         &nbsp; &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"  viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.543 7.25h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.506 6.506 0 00-4.666 5.5zm2.733 1.5H1.543a6.506 6.506 0 004.666 5.5 11.13 11.13 0 01-.352-.552c-.715-1.192-1.437-2.874-1.581-4.948zm1.504 0h4.44a9.637 9.637 0 01-1.363 4.177c-.306.51-.612.919-.857 1.215a9.978 9.978 0 01-.857-1.215A9.637 9.637 0 015.78 8.75zm4.44-1.5H5.78a9.637 9.637 0 011.363-4.177c.306-.51.612-.919.857-1.215.245.296.55.705.857 1.215A9.638 9.638 0 0110.22 7.25zm1.504 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.506 6.506 0 004.666-5.5h-2.733zm2.733-1.5h-2.733c-.144-2.074-.866-3.756-1.58-4.948a11.738 11.738 0 00-.353-.552 6.506 6.506 0 014.666 5.5zM8 0a8 8 0 100 16A8 8 0 008 0z" fill="rgb(149, 157, 165)"></path></svg>
                        </a> &nbsp;
                        <a href="https://www.linkedin.com/school/ecole-marocaine-des-sciences-de-l'ing%C3%A9nieur">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 19 18"><path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" fill="rgb(149, 157, 165)"/></svg>
                        </a> &nbsp;
                        <a href="https://www.youtube.com/channel/UC5BiOBai2N48ytbCRQWWqJw">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 19.17 13.6"><path d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z" fill="rgb(149, 157, 165)"/></svg>
                        </a>
                    </div>
                    </Col>
                </Row>
            <hr/>
            </Container>
        </footer>
    )
}

export default Footer
