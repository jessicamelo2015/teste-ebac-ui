pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/jessicamelo2015/teste-ebac-ui.git'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat '''set NO_COLOR=1
npm test'''
                
            }
        }
    }
}
