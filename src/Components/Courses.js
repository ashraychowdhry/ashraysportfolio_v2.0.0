import React from 'react'
import CourseCard from '../Helper/CourseCard'

export default function Courses() {
    return (
        <div className='courses-wrapper main-font' id='courses'>
            <div className='courses-header'>
                <h1 className='text-uppercase text-center py-5'>Courses</h1>
            </div>
            
            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Fall 2021</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='CS3790 - Cognitive Science' details='Multidisciplinary perspectives on cognitive science. Interdisciplinary approaches to issues in cognition, including memory, language, problem solving, learning, perception, and action.' />
                    <CourseCard summary='CS3510 - Algorithms' details='The course covers basic techniques (such as divide-and-conquer, dynamic programming, greedy algorithms, local search) for the design and analysis of efficient algorithms for standard computational problems (related to graphs, hashing, sorting, optimization, etc). It also provides an introduction to the theory of NP-Completeness.' />
                    <CourseCard summary='CS3250 - Computer Networking' details='The main objective of this course is to provide students with a rigorous understanding of computer networking concepts, protocols and technologies. Even though we will cover the major Internet protocols in some detail, the emphasis will be on fundamental problems, ideas and algorithms. From this perspective, the architecture and protocols of the Internet are only a successful case-study among many others that were not so fortunate. Students will have the opportunity to design their own protocols, implement and test them over real networks, solve related mathematical problems, and experiment with various network measurement and troubleshooting tools.' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='MGT4803 - FinTech and Cryptocurrencies' details=' Digital innovation, led by Artificial Intelligence (AI) and MachineLearning (ML), Big Data, cheaper and faster Computing and, Blockchain is disrupting traditionalFinancial Intermediation and is changing every function and service that financial intermediariesprovide.   This  class  aims  to  give  the  students  a  comprehensive  understanding  of  the  emergingFinTech industry and Crypto Currencies.' />
                    <CourseCard summary='PHIL3101 - Political Philosophy' details='This class focuses on theories of democracy. Students will be able to describe relationships among languages, philosophies, cultures, literature, ethics, or the arts.' />
                    <CourseCard summary='CS4883 - CREATE-X Capstone' details='Seniors will work in teams to apply a systematic design process to real multidisciplinary problems. Problems selected from a broad spectrum of interest areas, including computational, biomedical, environmental, mechanical, industrial design, electrical and thermal/fluids. ' />
                </div>
                
            </div>

            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Spring 2021</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='CS2200 - Systems and Networks' details='A broad exposure to computer system structure and networking including software abstractions in operating systems for orchestrating the usage of the computing resources.' />
                    <CourseCard summary='CS4641 - Machine Learning' details='Machine Learning (ML) is that area of Artificial Intelligence that is concerned with computational artifacts that modify and improve their performance through experience. The area is concerned with issues both theoretical and practical. We will cover a variety of topics, including: statistical supervised and unsupervised learning methods, randomized search algorithms, Bayesian learning methods, and reinforcement learning. The course also covers theoretical concepts such as inductive bias, the PAC and Mistake-bound learning frameworks, minimum description length principle, and Ockhams Razor. In order to ground these methods the course includes some programming and involvement in a number of projects.' />
                    <CourseCard summary='MGT4073 - Financial Modelling' details='This course presents tools necessary to build advanced Excel spreadsheets for financial decision-making. The course will include topics such as firm valuation, financial statements, cost of capital, portfolio construction, option valuation, duration and immunization.' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='ISYE3770 - Statistics and Applications' details=' Introduction to probability, probability distributions, point estimation, confidence intervals, hypothesis testing, linear regression, and analysis of variance.' />
                    <CourseCard summary='MGT4067 - Financial Markets Trading and Structure' details='The course focuses on liquidity, market structure and trading. Attention is given to the efficiency of trading systems and the role of intermediaries on market structure issues.' />
                </div>
                
            </div>

            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Fall 2020</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='CS2110 - Computer Organization and Programming' details='An introduction to basic computer hardware, machine language, assembly language, and C programming.' />
                    <CourseCard summary='CS3600 - Introduction to Artificial Intelligence' details='Introduction to Artificial Intelligence is a three-credit undergraduate course emphasizing the building of agents, environments, and systems that can be considered as acting intelligently. In particular, you will learn about the methods and tools that will allow you to build complete systems that can interact intelligently with their environment by learning and reasoning about the world.' />
                    <CourseCard summary='CS4400 - Introduction to Database Design' details='We introduce the fundamental concepts necessary for the design and use of modern database systems in todays large scale enterprise applications.' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='MATH3012 - Applied Combinatorics' details='Elementary combinatorial techniques used in discrete problem solving: counting methods, solving linear recurrences, graph and network models, related algorithms, and combinatorial designs.' />
                    <CourseCard summary='MGT3078 - Finance and Investments' details='An introduction to finance and to the securities markets. Topics include: time value of money, risk and return, capital budgeting, security analysis and portfolio management of stocks, bonds, and derivatives.' />
                    <CourseCard summary='ME4699 - Undergraduate Research' details='Sustainable Design and Manufacturing Laboratory - Research for credit.' />
                </div>
                
            </div>


            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Spring 2020</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='ACCT2101 - Accounting I' details='An introduction to the measurement and financial reporting of organizations and the interpretation of the resulting financial statements.' />
                    <CourseCard summary='CS1332 - Data Structures and Algorithms' details='Computer data structures and algorithms in the context of object-oriented programming. Focus on software development towards applications.' />
                    <CourseCard summary='CS2050 - Introduction to Discrete Mathematics' details='Proof methods, strategy, correctness of algorithms over discrete structures. Induction and recursion. Complexity and order of growth. Number theoretic principles and algorithms. Counting and computability.' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='ECON2106 - Principles of Microeconomics' details='This principles of economics course is intended to introduce students to concepts that will enable them to understand and analyze structure and performance of the market economy.' />
                    <CourseCard summary='CS2340 - Objects and Design' details='Object-oriented programming methods for dealing with large programs. Focus on quality processes, effective debugging techniques, and testing to assure a quality product.' />
                    <CourseCard summary='ME2699 - Undergraduate Research' details='Sustainable Design and Manufacturing Laboratory - Research for credit.' />
                </div>
                
            </div>

            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Fall 2019</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='APPH1040 - Science and Foundation of Health' details='Students will learn how genetics, the environment and human behavior influence well-being. Topics include health fitness, immunity, nutrition, stress management and chronic disease prevention.' />
                    <CourseCard summary='CS1100 - Freshman Leap Seminar' details='Small group discussions with first year students are led by one or more faculty members and include a variety of foundational, motivational, and topical subjects for computationalist.' />
                    <CourseCard summary='CS1331 - Introduction to Object Oriented Programming' details='Introduction to techniques and methods of object-oriented programming such an encapsulation, inheritance, and polymorphism. Emphasis on software development and individual programming skills.' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='ENGL1102 - English Composition II' details='English 1102 continues to address rhetorical principles and multimodal composing while introducing research as well as cultural studies and literary/discourse analysis.' />
                    <CourseCard summary='MATH1554 - Linear Algebra' details='Linear algebra through eigenvalues, eigenvectors, applications to linear systems, least squares, diagonalization, quadratic forms.' />
                    <CourseCard summary='PSYC1101 - General Psychology' details='A survey of methods, findings, and theories of the science of mind and behavior.' />
                </div>
                
            </div>
        </div>
        
    )
}
