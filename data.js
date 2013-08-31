var bc_programy = 
    {'Učiteľstvo akademických predmetov':
        [
            'Deskriptívna geometria - matematika',
            'Matematika - fyzika',
            'Matematika - informatika',
            'Matematika - telesná výchova'
        ],
     'Fyzika':
         [
             'Biomedicínska fyzika',
             'Obnoviteľné zdroje energie',
             'Fyzika'
         ],
     'Matematika': ['Matematika'],
     'Aplikovaná matematika': ['Ekonomická a finančná matematika', 'Manažérska matematika'],
     'Štatistika': ['Poistná matematika'],
     'Informatika': ['Informatika'],
     'Aplikovaná informatika': ['Aplikovaná informatika']
    };
var mgr_programy = 
    {'Učiteľstvo akademických predmetov':
        [
            'Deskriptívna geometria - matematika',
            'Matematika - fyzika',
            'Matematika - informatika',
            'Matematika - telesná výchova'
        ],
     'Fyzika':
         [
             'Biomedicínska fyzika',
             'Obnoviteľné zdroje energie',
             'Ostatné'
         ],
     'Matematika': ['Matematika', 'Počítačová grafika a geometria'],
     'Aplikovaná matematika': ['Ekonomická a finančná matematika', 'Manažérska matematika'],
     'Štatistika': ['Pravdepodobnosť a matematická štatistika'],
     'Informatika': ['Informatika (aj konverzný)'],
     'Kognitívna veda': ['Kognitívna veda'],
     'Aplikovaná informatika': ['Aplikovaná informatika (aj konverzný)']
    };

var bc_data = {
    'Deskriptívna geometria - matematika':
    {
        2: {'time': '8:30', 'date': '28.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '8:30', 'date': '30.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        4: {'time': '8:30', 'date': '30.08.2013', 'room': 'M/II', 'referent': 'Krajčová'}
    },
    'Matematika - fyzika':
    {
        2: {'time': '8:30', 'date': '28.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '8:30', 'date': '30.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        4: {'time': '8:30', 'date': '30.08.2013', 'room': 'M/II', 'referent': 'Krajčová'}
    },
    'Matematika - informatika':
    {
        2: {'time': '8:30', 'date': '28.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '8:30', 'date': '30.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        4: {'time': '8:30', 'date': '30.08.2013', 'room': 'M/II', 'referent': 'Krajčová'}
    },
    'Matematika - telesná výchova':
    {
        2: {'time': '8:30', 'date': '28.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '8:30', 'date': '30.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        4: {'time': '8:30', 'date': '30.08.2013', 'room': 'M/II', 'referent': 'Krajčová'}
    },

    'Biomedicínska fyzika':
    {
        2: {'time': '8:00', 'date': '28.08.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        3: {'time': '8:00', 'date': '5.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        4: {'time': '13:00', 'date': '5.09.2013', 'room': 'M/IV', 'referent': 'Svitková'}
    },
    'Obnoviteľné zdroje energie':
    {
        2: {'time': '8:00', 'date': '28.08.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        3: {'time': '8:00', 'date': '5.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        4: {'time': '13:00', 'date': '5.09.2013', 'room': 'M/IV', 'referent': 'Svitková'}
    },
    'Fyzika':
    {
        '2. (A-L)': {'time': '8:00', 'date': '27.08.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '2. (M-Ž)': {'time': '13:00', 'date': '27.08.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '3. (A-N)': {'time': '8:00', 'date': '4.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '3. (P-Ž)': {'time': '13:00', 'date': '4.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '4.': {'time': '13:00', 'date': '5.09.2013', 'room': 'M/IV', 'referent': 'Svitková'}
    },

    'Matematika':
    {
        2: {'time': '8:00', 'date': '27.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '13:00', 'date': '4.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        4: {'time': '13:00', 'date': '27.08.2013', 'room': 'M/I', 'referent': 'Gašparová'}
    },

    'Ekonomická a finančná matematika':
    {
        '2. (A-K)': {'time': '8:00', 'date': '27.08.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '2. (L-Ž)': {'time': '13:00', 'date': '27.08.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '3. (A-K)': {'time': '8:00', 'date': '5.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '3. (L-Ž)': {'time': '13:00', 'date': '5.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '4.': {'time': '8:00', 'date': '13.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
    },
    'Manažérska matematika':
    {
        '2. (A-K)': {'time': '8:00', 'date': '30.08.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '2. (L-Ž)': {'time': '13:00', 'date': '30.08.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '3. (A-K)': {'time': '8:00', 'date': '6.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '3. (L-Ž)': {'time': '13:00', 'date': '6.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '4.': {'time': '8:00', 'date': '13.09.2013', 'room': 'M/IV', 'referent': 'Mináriková'},
    },

    'Poistná matematika':
    {
        2: {'time': '8:00', 'date': '27.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '13:00', 'date': '4.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        4: {'time': '13:00', 'date': '27.08.2013', 'room': 'M/I', 'referent': 'Gašparová'}
    },

    'Informatika':
    {
        '2. (A-K)': {'time': '8:00', 'date': '28.08.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '2. (L-Ž)': {'time': '13:00', 'date': '28.08.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '3. (A-K)': {'time': '8:00', 'date': '04.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '3. (L-Ž)': {'time': '13:00', 'date': '04.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '4.': {'time': '8:00', 'date': '13.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
    },

    'Aplikovaná informatika':
    {
        '2. (A-H)': {'time': '8:00', 'date': '04.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        '2. (CH-L)': {'time': '13:00', 'date': '04.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        '2. (M-R)': {'time': '8:00', 'date': '05.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        '2. (S-Ž)': {'time': '13:00', 'date': '05.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        '3. (A-H)': {'time': '8:00', 'date': '09.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        '3. (CH-P)': {'time': '13:00', 'date': '09.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        '3. (R-Ž)': {'time': '8:00', 'date': '10.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        '4.': {'time': '8:00', 'date': '27.08.2013', 'room': 'M/I', 'referent': 'Gašparová'},
        '5.': {'time': '8:00', 'date': '06.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'}
    }
    
};

var mgr_data = {
    'Deskriptívna geometria - matematika':
    {
        1: {'time': '8:30', 'date': '16.08.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        2: {'time': '8:30', 'date': '10.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '13:00', 'date': '05.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
    },
    'Matematika - fyzika':
    {
        1: {'time': '8:30', 'date': '16.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        2: {'time': '8:30', 'date': '10.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '13:00', 'date': '5.09.2013', 'room': 'M/II', 'referent': 'Krajčová'}
    },
    'Matematika - informatika':
    {
        1: {'time': '8:30', 'date': '16.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        2: {'time': '8:30', 'date': '10.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '13:00', 'date': '5.09.2013', 'room': 'M/II', 'referent': 'Krajčová'}
    },
    'Matematika - telesná výchova':
    {
        1: {'time': '8:30', 'date': '16.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        2: {'time': '13:00', 'date': '10.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
    },
    'Fyzika - informatika':
    {
        3: {'time': '8:30', 'date': '5.09.2013', 'room': 'M/II', 'referent': 'Krajčová'}
    },

    'Biomedicínska fyzika':
    {
        1: {'time': '8:00', 'date': '10.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        2: {'time': '13:00', 'date': '10.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        3: {'time': '8:00', 'date': '13.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        4: {'time': '8:00', 'date': '5.09.2013', 'room': 'M/IV', 'referent': 'Svitková'}
    },
    'Obnoviteľné zdroje energie':
    {
        1: {'time': '8:00', 'date': '10.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
    },
    'Ostatné':
    {
        '1. (A-K)': {'time': '8:00', 'date': '9.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '1. (L-Ž)': {'time': '13:00', 'date': '9.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '2. (A-N)': {'time': '8:00', 'date': '12.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '2. (O-Ž)': {'time': '13:00', 'date': '12.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '3.': {'time': '8:00', 'date': '13.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '4.': {'time': '8:00', 'date': '13.09.2013', 'room': 'M/IV', 'referent': 'Svitková'}
    },

    'Matematika':
    {
        1: {'time': '8:00', 'date': '12.09.2013', 'room': 'M/I', 'referent': 'Gašparová'},
        2: {'time': '13:00', 'date': '9.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '8:30', 'date': '5.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
    },
    'Počítačová grafika a geometria':
    {
        1: {'time': '8:00', 'date': '12.09.2013', 'room': 'M/I', 'referent': 'Gašparová'},
        2: {'time': '13:00', 'date': '9.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '8:30', 'date': '5.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
    },

    'Ekonomická a finančná matematika':
    {
        '1. (A-K)': {'time': '8:00', 'date': '12.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '1. (L-Ž)': {'time': '13:00', 'date': '12.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '2. (A-K)': {'time': '8:00', 'date': '10.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '2. (L-Ž)': {'time': '13:00', 'date': '10.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '3.': {'time': '8:00', 'date': '11.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
    },
    'Manažérska matematika':
    {
        '1. (A-K)': {'time': '8:00', 'date': '16.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '1. (L-Ž)': {'time': '13:00', 'date': '16.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '2. (A-K)': {'time': '8:00', 'date': '11.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '2 (L-Ž)': {'time': '13:00', 'date': '11.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
        '3.': {'time': '8:00', 'date': '11.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '4.': {'time': '8:00', 'date': '13.09.2013', 'room': 'M/IV', 'referent': 'Svitková'},
    },

    'Pravdepodobnosť a matematická štatistika':
    {
        1: {'time': '13:00', 'date': '12.09.2013', 'room': 'M/I', 'referent': 'Gašparová'},
        2: {'time': '8:00', 'date': '9.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
        3: {'time': '8:30', 'date': '5.09.2013', 'room': 'M/II', 'referent': 'Krajčová'},
    },

    'Informatika (aj konverzný)':
    {
        '1. (A-M)': {'time': '8:00', 'date': '17.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '1. (O-Ž)': {'time': '13:00', 'date': '17.09.2013', 'room': 'M/V', 'referent': 'Mináriková'},
        '2.': {'time': '8:30', 'date': '6.09.2013', 'room': 'M/V', 'referent': 'Krajčová'},
        '3.': {'time': '8:00', 'date': '28.08.2013', 'room': 'M/V', 'referent': 'Gašparová'},
    },
    
    'Kognitívna veda':
    {
        1: {'time': '8:00', 'date': '30.08.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        2: {'time': '8:00', 'date': '30.08.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        3: {'time': '8:00', 'date': '30.08.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
    },

    'Aplikovaná informatika (aj konverzný)':
    {
        '1. (A-J)': {'time': '8:00', 'date': '16.09.2013', 'room': 'M/I', 'referent': 'Gašparová'},
        '1. (K-N)': {'time': '13:00', 'date': '16.09.2013', 'room': 'M/I', 'referent': 'Gašparová'},
        '1. (N-Ž)': {'time': '8:00', 'date': '17.09.2013', 'room': 'M/I', 'referent': 'Gašparová'},
        '2. (A-K)': {'time': '8:00', 'date': '11.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        '2. (L-Ž)': {'time': '13:00', 'date': '11.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
        '3.': {'time': '8:00', 'date': '12.09.2013', 'room': 'M/III', 'referent': 'Gašparovičová'},
    }
    
};

