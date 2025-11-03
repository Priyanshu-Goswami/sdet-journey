# My SDET Journey

## Day 1 - Email Validator ✅
**Date:** 2nd November, 2025

### What I Built:
- Email validation function without regex
- 10 comprehensive test cases

### Test Results: 
✅ **10/10 PASSED**

### What I Learned:
- String methods: `split()`, `includes()`, `length`, `startsWith()`, `endsWith()`
- Breaking complex logic into simple validation steps
- Debugging failing tests
- The importance of edge cases (spaces, empty strings, multiple @ symbols)

### Key Insight:
Good validation checks from general to specific - reject obviously bad input early!

## Day 2 - Regex Mastery ✅
**Date:** [Today's date]

### What I Learned:
- Regex basics: character classes, quantifiers, anchors
- `[a-zA-Z0-9]` - specific character sets
- `[^\s@]` - negation (NOT these characters)
- `+` - one or more
- `{2,}` - at least 2
- `^` and `$` - exact match (start/end)
- `\.` - escape special characters

### What I Built:
**Strict Email Validator:**
```javascript
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```

**Validates:**
- Letters, numbers, `.`, `_`, `-` before @
- Letters, numbers, `.`, `-` in domain (no underscore!)
- At least 2 letters in extension

**Test Results:** 8/8 tests passing ✅

### Key Learning:
Building the regex myself (with guidance) was WAY better than being given the solution. I understand every character and why it's there.

### Time Spent: ~1.5 hours