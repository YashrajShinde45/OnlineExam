pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Downloading project from GitHub'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Web Application'
                sh 'ls -l'
                echo 'Build completed successfully'
            }
        }

        stage('Test') {
            steps {
                echo 'Validating HTML code'
                sh 'tidy -q -e index.html'
                echo 'HTML validation completed'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying website to Apache server'

                sh 'cp index.html style.css script.js /var/deploy/'

                echo 'Website deployed successfully'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
            echo 'Visit http://localhost:8000'
        }

        failure {
            echo 'Pipeline failed! Check console output.'
        }
    }
}
